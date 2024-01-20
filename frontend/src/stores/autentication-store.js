import { defineStore } from 'pinia'
import axios from 'axios'

export const authenticationStore = defineStore('authentication', {
  state: () => ({
    user: null
  }),
  actions: {
    async retrieveUser() {
      const response = await axios.get('http://localhost:3000/authentication/user', {
        withCredentials: true // allows cookies to be sent with the request to another domain
      })

      console.log('User retrieved', response.data)

      this.user = response.data
    }
  }
})
