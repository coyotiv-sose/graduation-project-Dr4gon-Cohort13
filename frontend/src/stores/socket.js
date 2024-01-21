import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000', {
  withCredentials: true
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
      socket.on('numberOfVisits', (numberOfVisits) => {
        console.log('Receiving numberOfVisits event', numberOfVisits)
        this.numberOfVisits = numberOfVisits
      })
      socket.on('bitcoin', (bitcoin) => {
        this.bitcoin = bitcoin
      })
      socket.on('eur', (eur) => {
        this.eur = eur
      })
    },
    watch(stockName) {
      socket.emit('watch', stockName)
      if (stockName === 'bitcoin') {
        this.bitcoinWatched = true
      } else if (stockName === 'eur') {
        this.eurWatched = true
      }
    },
    unwatch(stockName) {
      socket.emit('unwatch', stockName)
      if (stockName === 'bitcoin') {
        this.bitcoinWatched = false
      } else if (stockName === 'eur') {
        this.eurWatched = false
      }
    }
  }
})
