<template lang="jade">
div#index index
</template>

<script>
import store from '@/store/'

export default {
  created () {
    store.commit('increment')
    console.log(store.state.count)
  },
  name: 'index',
  data: () => ({
  })
}
</script>

<style lang="stylus">

</style>
