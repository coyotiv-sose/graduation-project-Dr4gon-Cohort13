<script setup>
import { ref } from 'vue'

const count = ref(0)

// for (let i = 0; i < 100000; i++) {
//   console.log(i)
// }

const increment = () => {
  count.value++
}
</script>

<template>
  <button @click="increment">Composition API Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
