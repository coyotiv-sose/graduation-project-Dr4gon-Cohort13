<script>
import { mapActions } from 'pinia'
import { authenticationStore } from '../stores/authentication-store'

export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(authenticationStore, ['login']),
    async doLogin() {
      await this.login(this.username, this.password)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <button type="submit" @click="doLogin">Login</button>
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
../stores/authentication-store
