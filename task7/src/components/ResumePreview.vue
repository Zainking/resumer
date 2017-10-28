<template lang="jade">
div.ResumePreview
  h1 {{ msg }}
</template>

<script>
export default {
  name: 'ResumePreview',
  data: () => ({
    msg: 'I am resumer preview.'
  })
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
