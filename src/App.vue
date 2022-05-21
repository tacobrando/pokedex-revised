<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import SideBarSVG from "@/components/SVG/sidebar-svg.vue";
</script>

<template>
  <div class="app-container flex flex-col">
    <div class="navbar z-50">
      <Navbar />
    </div>
    <div class="main relative flex-1">
      <SideBarSVG id="svg" class="-z-10 top-0 left-0 fixed" />
    </div>
    <div class="footer z-10"></div>
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
body {
  background-image: url("./assets/background.png");
  background-repeat: repeat;
  background-size: 100%;
  margin: 0;
  overflow: hidden;
}
.footer {
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
  user-select: none; /* Non-prefixed version, currently                               supported by Chrome, Edge, Opera and Firefox */
}
</style>
