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
    ...mapActions(authenticationStore, ['getWelcomeMsg'])
  }
}
</script>

<template>
  <main>
    <br />

    <label>Bitcoin: {{ bitcoin }}</label>
    <br />
    <label>Eur: {{ eur }}</label>

    <br />
    <br />

    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
