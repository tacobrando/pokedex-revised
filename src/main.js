import { createApp } from 'vue'
import App from './App.vue'
import fetchAbsolute from 'fetch-absolute'
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';

const fetchApi = fetchAbsolute(fetch)(
  "https://pokeapi.co/api/v2"
);

createApp(App)
  .provide("fetchApi", fetchApi)
  .use(PrimeVue)
  .component('Carousel', Carousel)
  .mount('#app')
