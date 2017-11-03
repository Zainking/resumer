<template lang="jade">
div.ResumePreview
  h1 {{ clearResume }}
</template>

<script>
export default {
  name: 'ResumePreview',
  data: () => ({
    msg: 'I am resumer preview.'
  }),
  computed: {
    clearResume () {
      return this.$store.getters.clearResume
    }
  }
}
</script>

<style scoped lang="stylus">
h1
  font-weight: normal;
.ResumePreview
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width:62%;
</style>
