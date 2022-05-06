<script setup>
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import sideBarSVG from "./components/sidebar-svg.vue";
import Navbar from "./components/Navigation/Navbar.vue";
import Pokedex from "./components/Pokedex/Pokedex.vue";
</script>

<template>
  <div class="app-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <Pokedex id="poke" />
      <sideBarSVG id="svg" />
    </div>
  </div>
  <div class="footer"></div>
</template>

<style>
#app {
  font-family: "Nanum Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.app-container {
  display: flex;
  flex-direction: column;
}
body {
  background-image: url("./assets/background.png");
  background-repeat: repeat;
  background-size: 100%;
  margin: 0;
  overflow: hidden;
}
.main {
  position: relative;
  flex: 1;
}
#svg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}
.navbar {
  z-index: 2;
}
.footer {
  z-index: -1;
  position: absolute;
  background: #629ddf;
  height: 50px;
  bottom: 0;
  width: 100%;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
