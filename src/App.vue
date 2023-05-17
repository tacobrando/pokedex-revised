<script setup>
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import sideBarSVG from "./components/sidebar-svg.vue";
import Navbar from "./components/Navigation/Navbar.vue";
import Pokedex from "./components/Pokedex/Pokedex.vue";

function getDetails() {
  emit("getDetails")
}
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
  <div class="footer">
    <span id="details">
      <button @click="getDetails">A</button> 
      <h3>See Details</h3>
    </span>
  </div>
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

#details {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
}
#details button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background: #777777;
  border: none;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.25);
  font-size: 2.5rem;
  color: white;
  margin-right: 5px;
  cursor: pointer;
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
