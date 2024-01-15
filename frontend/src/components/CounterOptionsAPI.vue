<script>
export default {
  mounted() {
    this.count = 10
    console.log('mounted')
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    wait() {
      for (let i = 0; i < 100000; i++) {
        console.log(i)
      }
    },
    increment() {
      this.count++
    }
  },
  watch: {
    count(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    }
  }
}
</script>

<template>
  <button @click="increment">Options API Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
