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
    <br />

    <label>Bitcoin: {{ bitcoin }}</label>
    &nbsp;
    <!-- bad practice, don't do it -->
    <button v-if="!bitcoinWatched" @click="watch('bitcoin')">watch</button>
    <button v-if="bitcoinWatched" @click="unwatch('bitcoin')">unwatch</button>

    <label>Eur: {{ eur }}</label>
    &nbsp;<!-- bad practice, don't do it -->
    <button v-if="!eurWatched" @click="watch('eur')">watch</button>
    <button v-if="eurWatched" @click="unwatch('eur')">unwatch</button>
    <br />
    <br />

    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
