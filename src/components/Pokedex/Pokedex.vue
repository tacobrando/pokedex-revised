<script setup lang="ts">
import { inject, reactive } from "@vue/runtime-core";

const fetchApi: any = inject("fetchApi")
const state = reactive({
  pokemonInfo: [],
  showInfo: false,
  responseStatus: 0,
  imageUrl: ""
})

const spriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";
const apiUrl = "https://pokeapi.co/api/v2/pokemon";
// https://www.ibrahima-ndaw.com/blog/a-practical-guide-to-typescript/
//Tutorial on how to do on typescript
function getInfo(id: number): Promise<T> {
  if(id) {
    fetchApi(`${apiUrl}/${id}`)
      .then((response) => {
        state.responseStatus = response.status;
        response.json()
      })
      .then((data) => {
        state.pokemonInfo = data;
        state.imageUrl = `${imageUrl}/${id}.png`
      })
  }
}

</script>

<template>
  <div class="pokedex"></div>
</template>

<style></style>
