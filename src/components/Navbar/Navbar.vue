<template>
  <div class="navbar flex w-screen">
    <div class="details flex justify-start items-center">
      <div class="deco flex w-2.5 h-2.5 m-2.5 justify-self-start self-end" />
      <div class="title flex justify-between items-center w-2/5">
        <img src="../../assets/navbar/pokeball-small-blue.png" />
        <span><h3>Pokédex</h3></span>
        <img src="../../assets/navbar/pokeball-small-blue.png" />
      </div>
      <div class="capture-details flex justify-center self-center w-2/5">
        <span
          class="caught flex justify-between items-center p-1 w-screen"
          id="totalCaught"
        >
          <img src="../../assets/navbar/pokeball-small.png" />
          <p>898</p>
        </span>
        <span
          class="caught flex justify-between items-center p-1 w-screen"
          id="totalPokemon"
        >
          <img src="../../assets/navbar/default.png" />
          <p>898</p>
        </span>
      </div>
    </div>
    <div class="sortby flex justify-center items-center">
      <div class="container">
        <p>By Number</p>
      </div>
    </div>
    <div class="nav-deco flex justify-self-end self-end h-screen">
      <div class="fill1" />
      <div class="fill2" />
      <div class="fill3" />
    </div>
  </div>
</template>
<style scoped>
.navbar {
  background: #5b80f5;
  border-bottom: 5px solid #3a403d;
  height: 75px;
}
.deco {
  background: #2e4b92;
}

.title {
  background: #88daf2;
  border: 5px solid #3353a8;
  border-radius: 30px;
  padding: 2px;
  margin: 5%;
  height: 47px;
}

.caught {
  margin: 5%;
  background: #1b2d77;
  border-radius: 20px;
}

.caught img {
  margin: 0;
  width: 23px;
  height: 23px;
}

.caught p {
  margin: 0 5px 0 0;
}

.details {
  width: 70%;
}

.sortby {
  background: #71a4f3;
  width: 30%;
}
.container {
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 80%;
  height: 50%;
  background: #4379cf;
  border-radius: 50px;
}

.container p {
  margin: auto;
}

.title img {
  width: 30px;
  height: 30px;
}

.title p {
  margin: 0;
}
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
h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  -webkit-text-stroke: 2px #326a7a;
}
</style>
