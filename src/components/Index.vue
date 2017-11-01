<template lang="jade">
div#index
  Topbar.topbar
  div.content
    h1 Resumer
    p 一个很方很方的简历编辑器
    a(href='javascript:;' class='center-btn') 现在开始
</template>

<script>
import Topbar from '@/components/IndexComponents/Topbar'

export default {
  created () {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  },
  name: 'index',
  data: () => ({
  }),
  components: { Topbar }
}
</script>

<style lang="stylus" scoped>
.topbar
  display: block;
  background-color: #fff;
  position: relative;
  z-index: 2;
.content
  display: flex;
  margin-top: -51px;
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
  .center-btn
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 15px 30px;
    background-color: #02af5f;
    transition: all 0.5s;
    margin-top: 50px;
  .center-btn:hover
    background-color: #ffa500;
</style>
