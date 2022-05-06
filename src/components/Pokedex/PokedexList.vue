<script setup>
import {
  inject,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "@vue/runtime-core";
import sound from "../../assets/button.mp3";
const props = defineProps({
  apiUrl: {
    type: String,
    required: true,
  },
  spriteUrl: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["getPokemon"]);
const winHeight = reactive(window.innerHeight - 125);
const infinitescrolltrigger = ref(null);
const fetchApi = inject("fetchApi");
const audio = new Audio(sound);
const state = reactive({
  pokedex: [],
  nextPage: "",
  currentPage: "",
  active: false,
  focus: 0,
});

function getInfo() {
  fetchApi(state.currentPage)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      state.nextPage = data.next;
      data.results.forEach((pokemon) => {
        pokemon.id = pokemon.url
          .split("/")
          .filter(function (pokeId) {
            return !!pokeId;
          })
          .pop();
        state.pokedex.push(pokemon);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function scrollTrigger() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && state.nextPage) {
        next();
      }
    });
  });
  observer.observe(infinitescrolltrigger.value);
}

function next() {
  state.currentPage = state.nextPage;
  getInfo();
}

function getPokemon(id) {
  emit("getPokemon", id);
}

function focusTarget(event, id, index) {
  // audio.play();
  switch (event.keyCode) {
    case 38:
      if (state.focus == null) {
        state.focus = 0;
      } else if (state.focus > 0) {
        state.focus--;
        emit("getPokemon", state.focus + 1);
      }
      break;
    case 40:
      if (state.focus == null) {
        state.focus = 0;
      } else if (state.focus < state.pokedex.length - 1) {
        state.focus++;
        emit("getPokemon", state.focus + 1);
      }
      break;
  }
  if (event.type == "click") {
    state.focus = id - 1;

    emit("getPokemon", state.focus + 1);
  }
}

onBeforeMount(() => {
  state.currentPage = props.apiUrl;
  getInfo();
  getPokemon(1);
});
onMounted(() => {
  scrollTrigger();
});
</script>

<template>
  <ul
    @keydown="focusTarget"
    class="pokedex-list"
    :style="{ height: winHeight + 'px' }"
  >
    <li
      class="pokemon-container"
      :style="{ marginTop: winHeight / 2 - 40 + 'px' }"
      id="fill"
    ></li>
    <li
      class="testContainer"
      tabindex="0"
      :class="{ active: index === state.focus }"
      v-for="(pokemon, index) in state.pokedex"
      @click="focusTarget($event, pokemon.id, index)"
      :key="'poke' + index"
    >
      <img
        id="arrow"
        src="../../assets/arrow.svg"
        v-if="state.focus == index"
      />
      <div class="pokemon-container" :class="{ focus: index === state.focus }">
        <div class="caught">
          <img src="../../assets/navbar/pokeball-small.png" />
        </div>
        <img id="sprite" :src="`${spriteUrl}/${pokemon.id}.png`" />
        <p class="number">No. {{ String(pokemon.id).padStart(3, "0") }}</p>
        <p class="name">{{ capitalizeFirstLetter(pokemon.name) }}</p>
      </div>
    </li>
    <div id="scroll-trigger" ref="infinitescrolltrigger">
      <p>Loading...</p>
    </div>
  </ul>
</template>
<style scoped lang="scss">
#sprite {
  width: 35px;
  height: 35px;
}

#fill {
  visibility: hidden;
}
#arrow {
  height: 35px;
  -webkit-filter: invert(100%); /* Safari/Chrome */
  filter: invert(100%);
}
.active {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-right: 5%;
  margin-left: -5%;
}
.focus {
  background: #f49845 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .caught {
    background: #e5822e !important;
  }
}

.pokedex-list {
  margin: auto;
  list-style: none;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 30px;
  scroll-snap-type: y mandatory;
}
.pokemon-container {
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  align-items: center;
  background: #fceab8;
  padding: 1px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 3px solid #fceab8;
  border-radius: 100px 5px 5px 100px;
  color: black;
  text-align: start;
  cursor: pointer;
  width: 90%;

  .caught {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #eedaa5;
    box-shadow: inset 1px 1px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 100%;

    img {
      width: 75%;
    }
  }

  p {
    margin: 0 5% 0 5%;
    width: 24%;
  }
}

#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  font-size: 2em;
  color: red;
}

::-webkit-scrollbar-thumb {
  background: #e8573e;
  border-radius: 2px;
  border: 3px solid #8c3527;
}
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  border: 2px solid #9ebcf7;
  background: url("../../assets/scrollbar.svg");
}
</style>