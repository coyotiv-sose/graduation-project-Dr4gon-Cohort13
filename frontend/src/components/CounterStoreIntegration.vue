<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // gives access to this.count inside the component
    // same as reading from store.count
    ...mapState(useCounterStore, ['count'])
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    // gives access to this.increment() inside the component
    // same as calling from store.increment()
    ...mapActions(useCounterStore, ['increment', 'decrease']),
    // same as above but registers it as this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'CounterStoreIntegration' })
  }
}
</script>

<template>
  <button @click="increment">CounterStore API Count increment</button>
  <button @click="decrease">CounterStore API Count decrease</button>
  <label>{{ count }}</label>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
