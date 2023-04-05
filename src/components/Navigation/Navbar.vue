<script setup>
import { inject } from 'vue';
</script>
<template>
  <div class="navbar">
    <div class="details">
      <div class="deco" />
      <div class="title">
        <img src="../../assets/navbar/pokeball-small-blue.png" />
        <span><h3>Sinnoh Pokédex</h3></span>
        <img src="../../assets/navbar/pokeball-small-blue.png" />
      </div>
      <div class="capture-details">
        <span class="caught" id="totalCaught">
          <img src="../../assets/navbar/pokeball-small.png" />
          <p>151</p>
        </span>
        <span class="caught" id="totalPokemon">
          <img src="../../assets/navbar/default.png" />
          <p>151</p>
        </span>
      </div>
    </div>
    <div class="sortby">
      <div class="container">
        <p>By Number</p>
      </div>
    </div>
    <div class="nav-deco">
      <div class="fill1" />
      <div class="fill2" />
      <div class="fill3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  background: #5b80f5;
  border-bottom: 5px solid #3a403d;
  height: 70px;
}
.deco {
  display: flex;
  width: 10px;
  height: 10px;
  background: #2e4b92;
  margin: 10px;
  justify-self: flex-start;
  align-self: flex-end;
}
.details {
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5%;
  width: 40%;
  background: #88daf2;
  border: 5px solid #3353a8;
  border-radius: 30px;
  padding: 2px;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    margin: 0;
  }
}
.capture-details {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 40%;

  .caught {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5%;
    padding: 3px;
    width: 100%;
    background: #1b2d77;
    border-radius: 20px;

    img {
      margin: 0;
      width: 23px;
      height: 23px;
    }

    p {
      margin: 0 5px 0 0;
    }
  }
}
.sortby {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #71a4f3;
  width: 30%;

  .container {
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 80%;
    height: 50%;
    background: #4379cf;
    border-radius: 50px;

    p {
      margin: auto;
    }
  }
}

.nav-deco {
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  height: 100%;
  .fill1 {
    width: 10px;
    height: 100%;
    background: #79a9e9;
  }
  .fill2 {
    width: 10px;
    height: 100%;
    background: #8cbfee;
  }
  .fill3 {
    width: 5px;
    height: 100%;
    background: #abdefb;
  }
}

h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  -webkit-text-stroke: 2px #326a7a;
}
</style>