<script setup>
import CounterStoreIntegration from '@/components/CounterStoreIntegration.vue'
</script>

<template>
  <div class="about">
    <h1>I'm testing a new view element</h1>
  </div>

  <CounterStoreIntegration />
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
