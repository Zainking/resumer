<template lang="jade">
div#register
  div.content
    h1 Resumer
    p 注册
    input(placeholder="请输入用户名" type="text" v-model='username')
    input(placeholder="请输入密码" type="password" v-model='password')
    input(placeholder="请确认密码" type="password" v-model='rePassword')
    a(href='javascript:;' class='center-btn' @click="doReg()") 现在注册
</template>

<script>
import api from '@/api/'

export default {
  name: 'register',
  data: () => ({
    username: '',
    password: '',
    rePassword: ''
  }),
  methods: {
    doReg () {
      if (this.username && this.password && this.rePassword) {
        if (this.password === this.rePassword) {
          api.register(this.username, this.password, () => {
            alert('注册成功！')
            this.$router.push('/')
          })
        } else alert('两次密码须输入一致！')
      } else alert('用户名，密码不能为空！')
    }
  }
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
