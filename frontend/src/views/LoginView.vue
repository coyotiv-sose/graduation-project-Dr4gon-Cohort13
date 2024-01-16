<script>
import axios from 'axios'

export default {
  name: 'LoginView',
  computed: {
    loginState() {
      return ''
    }
  },
  data() {
    return {
      username: '',
      password: '',
      loginState: ''
    }
  },
  methods: {
    async login() {
      try {
        const loginState = await axios.post('http://localhost:3000/authUsers/session', {
          email: this.username,
          password: this.password
        })

        console.log(loginState.data)

        if (loginState.status === 200) {
          this.loginState = 'success'
        }
      } catch (error) {
        this.loginState = 'failed'
      }
    }
  }
}
</script>

<template>
  <h1>login</h1>
  <form v-on:submit.prevent>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" v-model="username" required />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" v-model="password" required />
    <button type="submit" @click="login">Login</button>

    <label>{{ this.loginState }}</label>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
