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
    <br />

    <label>Bitcoin: {{ bitcoin }}</label> <button @click="watch('bitcoin')">watch</button>
    <br />
    <label>Eur: {{ eur }}</label> <button @click="watch('eur')">watch</button>

    <br />
    <br />

    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
