<template lang="jade">
div#app
  header
    Topbar
  main
    ResumeEditor
    ResumePreview
</template>

<script>
import '@/assets/reset.css'
import icons from './assets/icons'

import Topbar from '@/components/Topbar'
import ResumeEditor from '@/components/ResumeEditor'
import ResumePreview from '@/components/ResumePreview'

export default {
  name: 'app',
  created: function () {
    document.body.insertAdjacentHTML('afterbegin', icons)
  },
  data: () => ({
  }),
  components: {
    Topbar, ResumeEditor, ResumePreview
  }
}
</script>

<style lang="stylus">
#app
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
header
  min-width: 1024px;
  max-width: 1440px;
  width: 100%;
  margin: 16px 0;
main
  min-width: 1024px;
  max-width: 1440px;
  width: 100%;
  margin: 16px 0;
  flex-grow: 1;
  flex-direction: row;
  display: flex;
  justify-content:space-around;
</style>
