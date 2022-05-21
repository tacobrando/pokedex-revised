import { createApp } from 'vue'
import App from './App.vue'
import fetchAbsolute from 'fetch-absolute'
import '@/main.css'

const fetchApi = fetchAbsolute(fetch)("https://pokeapi.co/api/v2")

createApp(App).provide("fetchApi", fetchApi).mount('#app')
