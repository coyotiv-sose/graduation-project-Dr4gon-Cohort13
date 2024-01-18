<script>
import axios from 'axios'

export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      username: '',
      password: '',
      status: ''
    }
  },
  methods: {
    async login() {
      const newUser = await axios.post('http://localhost:3000/authentication/session', {
        email: this.username,
        password: this.password
      })

      if (newUser) {
        this.status = 'Login successful'
      } else {
        this.status = 'Login failed'
      }

      console.log(newUser.data)
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <button type="submit" @click="login">Login</button>
    <label>{{ status }}</label>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>
