import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true // allows cookies to be sent with the request to another domain
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const authenticationStore = defineStore('authentication', {
  state: () => ({
    user: null,
    welcomeMsg: 'Loading welcome msg...'
  }),
  actions: {
    async retrieveUser() {
      const response = await axios.get('/authentication/user')

      if (response.data) {
        console.log('User retrieved', response.data)
        this.user = response.data
      } else {
        console.log('No user found')
      }
    },
    async login(email, password) {
      const newUser = await axios.post('/authentication/session', {
        email: email,
        password: password
      })

      // awaited
      if (newUser) {
        this.user = newUser.data

        console.log('User logged in: ', newUser.data.nickName)
      } else {
        this.user = null
        this.status = 'Login failed'
      }

      console.log(newUser.data)
    },
    async logout() {
      await axios.delete('/authentication/session')
      this.welcomeMsg = 'Loading welcome msg...'
      this.user = null
    },
    async getWelcomeMsg(nickName) {
      const response = await axios.post('/authentication/welcome', {
        name: nickName,
        date: new Date(),
        location: 'UK'
      })

      this.welcomeMsg = response.data
    }
  }
})
