<script setup lang="ts">
import { Ref, ref } from 'vue'

defineProps<{ msg: string }>()

const count: Ref<0 | 1> = ref(0)

type ClickEvent = (payload: MouseEvent) => void


const clickEvent: ClickEvent = () => {
  count.value++
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="clickEvent">count is {{ count }}</button>
    <CustomBalise></CustomBalise>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
