import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000', {
  withCredentials: true // allows cookies to be sent with the request to another domain
})

export const socketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    time: '',
    numberOfVisits: 0,
    bitcoin: 0,
    bitcoinWatched: false,
    eur: 0,
    eurWatched: false
  }),
  actions: {
    connect() {
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

      socket.on('numberOfVisits', (numberOfVisits) => {
        this.numberOfVisits = numberOfVisits
      })
    },
    watch(stockName) {
      socket.on(stockName, (stockValue) => {
        if (stockName === 'eur') {
          this.eur = stockValue
          this.eurWatched = true
        } else if (stockName === 'bitcoin') {
          this.bitcoin = stockValue
          this.bitcoinWatched = true
        }
      })
    },
    unwatch(stockName) {
      socket.off(stockName)
      if (stockName === 'eur') {
        this.eurWatched = false
      } else if (stockName === 'bitcoin') {
        this.bitcoinWatched = false
      }
    }
  }
})
