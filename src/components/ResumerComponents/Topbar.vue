<template lang="jade">
div.Topbar
  h1 Resumer for username
  div.btnbox
    a.btn(href='javascript:;') 保存
    a.btn(href='javascript:;') 预览
    router-link.btn(to='/') 返回首页
</template>

<script>
export default {
  name: 'Topbar',
  data: () => ({
  })
}
</script>

<style scoped lang="stylus">
.Topbar
  padding: 21px;
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  display: flex;
  justify-content: space-between;
  h1
    font-weight: normal;
    font-size: 24px;
    float: left;
    flex-grow: 1;
  .btnbox
    align-items: center;
    display: flex;
    a
      margin: 0 10px;
      padding: 5px 15px;
      background-color: #eee;
      text-decoration: none;
      color: #000;
      transition: all 0.3s;
    a:nth-child(1)
      background-color: #02af5f;
      color: #fff;
    a:hover
      background-color: #ffa500;
      color: #fff;
</style>
