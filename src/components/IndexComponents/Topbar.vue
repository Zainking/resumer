<template lang="jade">
div.Topbar
  h1 Resumer
  div.btnbox
    div(v-show="!currentUser")
      input(type="text" placeholder='请输入用户名' v-model="username")
      input(type="password" placeholder='请输入密码' v-model="password")
      a.btn(href='javascript:;' @click="login()") 登陆
    div.login(v-show="currentUser")
      span 欢迎，{{currentUser?currentUser.attributes.username:"加载中"}}
      a.btn(href='javascript:;') 修改密码
      a.btn(href='javascript:;' @click="logout()") 登出
</template>

<script>

export default {
  name: 'Topbar',
  data: () => ({
    username: '',
    password: ''
  }),
  created () {
    console.log('start: ' + this.currentUser)
  },
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },
  methods: {
    login: function () {
      var self = this
      this.$store.commit('login', {username: self.username, password: self.password})
      console.log('topbar computed: ' + this.currentUser)
      setTimeout(function () {
        console.log('[Timeout]topbar computed: ' + this.currentUser)
      }, 2000)
    },
    logout: function () {
      this.$store.commit('logout')
      console.log('topbar computed: ' + this.currentUser)
    }
  }
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
