<template lang="jade">
div#app
  router-view
</template>

<script>
import '@/assets/reset.css'
import store from '@/store/'

export default {
  name: 'app',
  store
}
</script>
