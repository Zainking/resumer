<template>
  <div class="ResumerPreview">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ResumerPreview',
  data: () => ({
    msg: 'I am resumer preview.'
  })
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
.ResumerPreview{
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width:62%;
}
</style>
