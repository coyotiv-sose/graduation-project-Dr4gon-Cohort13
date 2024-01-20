<script>
import { authenticationStore } from '@/stores/authentication-store'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'HomeView',
  async mounted() {
    await this.getWelcomeMsg(this.user?.nickName)
  },
  computed: {
    ...mapState(authenticationStore, ['welcomeMsg', 'user'])
  },
  methods: {
    ...mapActions(authenticationStore, ['getWelcomeMsg'])
  }
}
</script>

<template>
  <main>
    <Suspense>
      <label>{{ this.welcomeMsg }}</label>
    </Suspense>
  </main>
</template>
