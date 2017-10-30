<template lang="jade">
div.Topbar
  h1 Resumer
  div.btnbox
    div(v-show="!login")
      input(type=text placeholder='请输入用户名')
      input(type=password placeholder='请输入密码')
      a.btn(href='javascript:;' @click="login = true") 登陆
    div.login(v-show="login")
      span 欢迎，username
      a.btn(href='javascript:;') 修改密码
      a.btn(href='javascript:;' @click="login = false") 登出
</template>

<script>
export default {
  name: 'Topbar',
  data: () => ({
    login: false
  })
}
</script>

<style scoped lang="stylus">
.Topbar
  padding: 10px 21px;
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
    input
      padding: 5px 15px;
      display: inline-block;
      margin: 0 5px;
    a
      margin: 0 10px;
      padding: 5px 15px;
      background-color: #eee;
      text-decoration: none;
      color: #000;
      transition: all 0.3s;
    a:hover
      background-color: #ffa500;
      color: #fff;
</style>
