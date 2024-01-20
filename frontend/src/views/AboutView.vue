<script setup>
import CounterCompositionAPI from '@/components/CounterCompositionAPI.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <CounterCompositionAPI />
  <Suspense>
    <TheWelcome />
  </Suspense>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
