<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumerEditor/>
      <ResumerPreview/>
    </main>
  </div>
</template>

<script>
import '@/assets/reset.css'

import Topbar from '@/components/Topbar'
import ResumerEditor from '@/components/ResumerEditor'
import ResumerPreview from '@/components/ResumerPreview'

export default {
  name: 'app',
  data: () => ({
    // text: '你好啊哈哈哈'
  }),
  components: {
    Topbar, ResumerEditor, ResumerPreview
  }
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  header{
    min-width: 1024px;
    max-width: 1440px;
    margin: 16px 0;
  }
  main{
    min-width: 1024px;
    max-width: 1440px;
    margin: 16px 0;
    flex-grow: 1;
    flex-direction: row;
    display: flex;
    justify-content:space-around;
  }
</style>
