<template lang="jade">
div#resumer
  header
    Topbar
  main
    ResumeEditor
    ResumePreview
</template>

<script>
import icons from '@/assets/icons'

import Topbar from '@/components/ResumerComponents/Topbar'
import ResumeEditor from '@/components/ResumerComponents/ResumeEditor'
import ResumePreview from '@/components/ResumerComponents/ResumePreview'

export default {
  name: 'resumer',
  created: function () {
    if (!this.$store.state.currentUser) {
      alert('请先登录')
      this.$router.push('/')
    }
    document.body.insertAdjacentHTML('afterbegin', icons)
  },
  data: () => ({
  }),
  components: {
    Topbar, ResumeEditor, ResumePreview
  }
}
</script>

<style lang="stylus" scoped>
#resumer
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
