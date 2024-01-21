<script>
import { authenticationStore } from '@/stores/authentication-store'
import { socketStore } from '@/stores/socket'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'HomeView',
  async mounted() {
    await this.getWelcomeMsg(this.user?.nickName)
  },
  computed: {
    ...mapState(authenticationStore, ['welcomeMsg', 'user']),
    ...mapState(socketStore, ['bitcoin', 'eur', 'bitcoinWatched', 'eurWatched'])
  },
  methods: {
    ...mapActions(authenticationStore, ['getWelcomeMsg']),
    ...mapActions(socketStore, ['watch', 'unwatch'])
  }
}
</script>

<template>
  <main>
    <label>Bitcoin:</label>
    <text>{{ bitcoin }} </text>
    <button v-if="!this.bitcoinWatched" @click="this.watch('bitcoin')">Watch</button>
    <button v-if="this.bitcoinWatched" @click="this.unwatch('bitcoin')">Unwatch</button>

    <br />

    <label>Eur: </label>
    <text>{{ eur }} </text>
    <button v-if="!this.eurWatched" @click="this.watch('eur')">Watch</button>
    <button v-if="this.eurWatched" @click="this.unwatch('eur')">Unwatch</button>

    <br />
    <br />

    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
