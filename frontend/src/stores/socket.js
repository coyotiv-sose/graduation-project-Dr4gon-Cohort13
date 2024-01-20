import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000', {
  withCredentials: true
})

export const socketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    time: ''
  }),
  actions: {
    async init() {
      socket.on('connect', () => {
        console.log('connected')
        this.connected = true
      })
      socket.on('disconnect', () => {
        console.log('disconnected')
        this.connected = false
      })
      socket.on('time', (time) => {
        console.log('Receiving time event', time)
        this.time = time
      })
    }
  }
})
