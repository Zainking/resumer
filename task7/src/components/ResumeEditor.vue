<template lang="jade">
div.ResumeEditor
  h1 {{ msg }}
</template>

<script>
export default {
  name: 'ResumeEditor',
  data: () => ({
    msg: 'I am resumer editor.'
  })
}
</script>

<style scoped lang="stylus">
h1
  font-weight: normal;
.ResumeEditor
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width: 35%;
</style>
