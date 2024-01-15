<script setup>
import CounterCompositionAPI from '@/components/CounterCompositionAPI.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <CounterCompositionAPI />
    <Suspense>
      <TheWelcome />
    </Suspense>
  </main>
</template>
