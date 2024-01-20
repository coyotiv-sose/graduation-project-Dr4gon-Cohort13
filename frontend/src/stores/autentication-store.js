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
    },
    async login(email, password) {
      const newUser = await axios.post(
        'http://localhost:3000/authentication/session',
        {
          email: email,
          password: password
        },
        {
          withCredentials: true
        }
      )

      // awaited
      if (newUser) {
        this.user = newUser.data

        console.log('User logged in: ', newUser.data.nickName)
      } else {
        this.user = null
        this.status = 'Login failed'
      }

      console.log(newUser.data)
    }
  }
})
