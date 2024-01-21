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
    ...mapState(socketStore, ['bitcoin', 'eur'])
  },
  methods: {
    ...mapActions(authenticationStore, ['getWelcomeMsg']),
    ...mapActions(socketStore, ['watch'])
  }
}
</script>

<template>
  <main>
    <label>Bitcoin:</label>
    <text>{{ bitcoin }} </text>
    <button @click="this.watch('bitcoin')">Watch</button>

    <br />

    <label>Eur: </label>
    <text>{{ eur }} </text>
    <button @click="this.watch('eur')">Watch</button>

    <br />
    <br />

    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
