<script setup>
import {
  inject,
  onBeforeMount,
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
const urlParseHelper = "https://pokeapi.co/api/v2/pokemon-species/"
const emit = defineEmits(["getPokemon"]);
const winHeight = reactive(window.innerHeight - 125);
// const infinitescrolltrigger = ref(null);
const fetchApi = inject("fetchApi");
const audio = new Audio(sound);
const state = reactive({
  pokedex: [],
  nextPage: "",
  currentPage: "",
  active: false,
  focus: 0,
  count: 0,
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
      data.pokemon_entries.forEach((pokemon) => {
        pokemon.id = parseInt(pokemon.pokemon_species.url.replace(urlParseHelper, ''))
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

// DEPRECATED
// Kept in for possible future use

// function scrollTrigger() {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > 0 && state.nextPage) {
//         next();
//       }
//     });
//   });
//   observer.observe(infinitescrolltrigger.value);
// }

// function next() {
//   state.currentPage = state.nextPage;
//   getInfo();
// }

function getPokemon(id) {
  emit("getPokemon", id);
}

function focusTarget(event, id, url) {
  // Arrow key functions not working when switching to .gifs
  // Will have to debug later
  
  // switch (event.keyCode) {
  //   case 38:
  //     state.focus--;
  //     emit("getPokemon", url);
  //     audio.play();
  //     break;
  //   case 40:
  //     state.focus++;
  //     emit("getPokemon", url);
  //     audio.play();
  //     break;
  // }
  if (event.type == "click") {
    state.focus = id - 1;
    audio.play();
    emit("getPokemon", url);
  }
}

onBeforeMount(() => {
  state.currentPage = props.apiUrl;
  getInfo();
  getPokemon(1);
});
// onMounted(() => {
//   scrollTrigger();
// });
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
      @click="focusTarget($event, pokemon.entry_number, pokemon.pokemon_species.url)"
      :key="pokemon.entry_number"
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
        <p class="number">No. {{ String(pokemon.entry_number).padStart(3, "0") }}</p>
        <p class="name">{{ capitalizeFirstLetter(pokemon.pokemon_species.name) }}</p>
      </div>
    </li>
    <!-- Loader animation not needed anymore due to limiting of api calls -->

    <!-- <div class="loader" id="scroll-trigger" ref="infinitescrolltrigger">
      <img src="../../assets/navbar/pokeball-small.png" alt="" />
    </div> -->
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
.loader img {
  width: 50px;
  animation: loader 1.2s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>