<script setup lang="ts">
import { ref } from 'vue';
import useFetch from './composables/useFetch';
import { useQuery } from '@tanstack/vue-query'
import useLocalStorage from './composables/useLocalStorage';

type Planet = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: string[],
  films: string[],
  created: string,
  edited: string,
  url: string
}

type StarWarsApi<T> = {
  count: number,
  next: string | null,
  previous: string | null,
  results: T
}

const customFetch = async (page: number) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page)
  const results = await response.json()
  return results
}
const page = ref(1)
const { isLoading, data } = useQuery<StarWarsApi<Planet[]>>({
  queryKey: ['planets', page],
  queryFn: () => customFetch(page.value),
  staleTime: 3000
})



type DemoType = {
  key: string,
  value: string

}
const demo1: DemoType = {
  key: 'data',
  value: 'hello'

}
const { data: mykey, set } = useLocalStorage<DemoType>('data')



</script>

<template>
  <p>
    {{ mykey ? mykey.value : 'no data' }}
  </p>
  <button @click="set(demo1)">

  </button>
  <div v-if="isLoading">
    <p>chargement</p>

  </div>
  <ul>
    <li v-for="planet in data?.results">
      {{ planet.name }}
    </li>
  </ul>

  <button @click="page++">
    page suivante</button>
  <button @click="page--">
    page précédente</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
