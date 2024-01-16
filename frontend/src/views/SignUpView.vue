<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signup() {
      console.log('signup')
    }
  }
}
</script>

<template>
  <h1>signup</h1>
  <form>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" v-model="username" required />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" v-model="password" required />
    <button type="submit">Signup</button>
  </form>
</template>
