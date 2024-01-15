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
      console.log('Shout out my name' + this.name)
    }
  },
  watch: {
    count(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    }
  },
  props: {
    name: {
      type: String,
      required: true
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
