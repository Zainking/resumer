<template lang="jade">
div(v-bind:class="{preview: isPreviewing}")#resumer
  header.previewHidden
    Topbar(@setPreviewToFather="setPreviewTrue()")
  main
    ResumeEditor.previewHidden
    ResumePreview
  a(href='javascript:;' @click='isPreviewing = false')#back 返回
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
    isPreviewing: false
  }),
  components: {
    Topbar, ResumeEditor, ResumePreview
  },
  methods: {
    setPreviewTrue () {
      this.isPreviewing = true
    }
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
  #back
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 20px;
    background-color: #eee;
    transition: all 0.5s;
    color: #000;
    text-decoration: none;
    border: 1px solid;
  #back:hover
    background-color: #ffa500;
    color: #fff;
.preview
  .previewHidden
    display: none;
  #back
    display: block !important;
</style>
