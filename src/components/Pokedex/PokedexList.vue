<script setup>
import {
  inject,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "@vue/runtime-core";
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
const state = reactive({
  pokedex: [],
  nextPage: "",
  currentPage: "",
  active: false,
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
  state.active != state.active;
  emit("getPokemon", id);
}

onBeforeMount(() => {
  state.currentPage = props.apiUrl;
  getInfo();
});
onMounted(() => {
  scrollTrigger();
});
</script>

<template>
  <div class="pokedex-list" :style="{ height: winHeight + 'px' }">
    <div
      class="pokemon-container"
      :class="{ active: state.active }"
      v-for="(pokemon, index) in state.pokedex"
      @click="getPokemon(pokemon.id)"
      :key="'poke' + index"
    >
      <div class="caught">
        <img src="../../assets/navbar/pokeball-small.png" />
      </div>
      <img id="sprite" :src="`${spriteUrl}/${pokemon.id}.png`" />
      <p class="number">No. {{ String(pokemon.id).padStart(3, "0") }}</p>
      <p class="name">{{ capitalizeFirstLetter(pokemon.name) }}</p>
    </div>
    <div id="scroll-trigger" ref="infinitescrolltrigger">
      <p>Loading...</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
#sprite {
  width: 35px;
  height: 35px;
}
.pokedex-list {
  margin: auto;
  width: 100%;
  overflow-y: auto;
  padding-right: 30px;
}

.pokemon-container:active {
  background: #f49845;

  .caught {
    background: #e5822e;
  }
}
.pokemon-container {
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px 0px 15%;
  align-items: center;
  background: #fceab8;
  padding: 1px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 3px solid #fceab8;
  border-radius: 100px 5px 5px 100px;
  color: black;
  text-align: start;
  cursor: pointer;

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
    width: 20%;
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