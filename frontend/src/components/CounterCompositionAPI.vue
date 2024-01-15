<script setup>
import { onMounted, ref } from 'vue'

const count = ref(0)

// for (let i = 0; i < 100000; i++) {
//   console.log(i)
// }

const increment = () => {
  count.value++
}

onMounted(() => {
  count.value = 5
})
</script>

<template>
  <button @click="increment">Composition API Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
