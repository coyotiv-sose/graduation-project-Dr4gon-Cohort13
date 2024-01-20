<script>
import CounterCompositionAPI from '@/components/CounterCompositionAPI.vue'
import TheWelcome from '../components/TheWelcome.vue'
import { authenticationStore } from '@/stores/autentication-store'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'HomeView',
  components: {
    CounterCompositionAPI,
    TheWelcome
  },
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
