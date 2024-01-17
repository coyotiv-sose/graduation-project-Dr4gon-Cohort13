import { defineStore } from 'pinia'
import axios from 'axios'

export const authenticationStore = defineStore('authentication', {
  state: () => ({
    user: null
  }),
  actions: {
    async retrieveUser() {
      this.user = await axios.get('http://localhost:3000/authUsers/session', {
        withCredentials: true
      })
    }
  }
})
