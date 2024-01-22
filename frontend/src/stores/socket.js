import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const socketStore = defineStore('socket', {
  state: () => ({
    connected: false
  }),
  actions: {
    connect() {
      const socket = io('http://localhost:3000')

      console.log('Establishing socket connection')

      socket.on('connect', () => {
        console.log('Socket connected')
        this.connected = true
      })

      socket.on('disconnect', () => {
        console.log('Socket disconnected')
        this.connected = false
      })
    }
  }
})
