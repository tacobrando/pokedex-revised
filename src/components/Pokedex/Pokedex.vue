<script setup>
import { inject, onMounted, provide, reactive } from "@vue/runtime-core";
import PokedexList from "./PokedexList.vue";
import viewboxSvg from "../viewbox-svg.vue";

const fetchApi = inject("fetchApi");
const state = reactive({
  pokemonInfo: [],
  showInfo: false,
  responseStatus: 0,
  imageUrl: "",
});
const spriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";
const apiUrl = "https://pokeapi.co/api/v2/pokemon";

function getInfo(id) {
  if (id) {
    fetchApi(`${apiUrl}/${id}`)
      .then((response) => {
        state.responseStatus = response.status;
        return response.json();
      })
      .then((data) => {
        state.pokemonInfo = data;
        state.imageUrl = `${imageUrl}/${id}.png`;
        state.showInfo = true;
      })
      .catch((error) => {
        if (state.responseStatus === 404) {
          state.showInfo = true;
          console.log(error);
        }
      });
  }
}
onMounted(() => {});
</script>
<template>
  <div class="pokedex">
    <div class="view-pokemon">
      <viewboxSvg :imageUrl="state.imageUrl" />
    </div>
    <PokedexList
      :spriteUrl="spriteUrl"
      :apiUrl="apiUrl"
      @getPokemon="getInfo($event)"
    />
  </div>
</template>

<style scoped lang="scss">
.pokedex {
  display: inline-flex;
  flex-direction: row;
  margin: auto;
  z-index: 1;
  width: 75%;

  .view-pokemon {
    display: inline-block;
    margin-top: 30px;
  }
}

#sprite {
  position: absolute;
  top: 50%;
  right: 50%;
}
</style>