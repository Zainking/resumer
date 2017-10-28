<template>
  <div class="ResumerEditor">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ResumerEditor',
  data: () => ({
    msg: 'I am resumer editor.'
  })
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
.ResumerEditor{
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width: 35%;
}
</style>
