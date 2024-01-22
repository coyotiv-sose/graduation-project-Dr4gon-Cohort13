import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const socketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    time: ''
  }),
  actions: {
    connect() {
      const socket = io('http://localhost:3000', {
        withCredentials: true // allows cookies to be sent with the request to another domain
      })

      console.log('Establishing socket connection')

      socket.on('connect', () => {
        console.log('Socket connected')
        this.connected = true
      })

      socket.on('disconnect', () => {
        console.log('Socket disconnected')
        this.connected = false
      })

      socket.on('time', (time) => {
        this.time = time
      })
    }
  }
})
