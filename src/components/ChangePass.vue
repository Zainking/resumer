<template lang="jade">
div#changepass
  div.content
    h1 Resumer
    p 修改密码
    input(placeholder="请输入原密码" type="password")
    input(placeholder="请输入新密码" type="password")
    input(placeholder="请确认新密码" type="password")
    a(href='javascript:;' class='center-btn') 修改密码
</template>

<script>
export default {
  name: 'changepass',
  created () {
    if (!this.$store.state.currentUser) {
      alert('请先登录')
      this.$router.push('/')
    }
  },
  data: () => ({
  })
}
</script>

<style lang="stylus" scoped>
.content
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#888, #000);
  h1
    font-size: 60px;
    font-weight: 400;
    font-family: '微软雅黑 Light';
    color: #fff;
  p
    font-size: 20px;
    color: #888;
  input
    display: block;
    padding: 15px 30px;
    text-align: center;
    margin: 20px 0;
    width: 183px;
  .center-btn
    display: block;
    text-align: center;
    text-decoration: none;
    color: #fff;
    padding: 15px 30px;
    background-color: #02af5f;
    transition: all 0.5s;
    margin-top: 20px;
    width: 183px;
  .center-btn:hover
    background-color: #ffa500;
</style>
