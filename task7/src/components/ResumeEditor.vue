<template lang="jade">
div.ResumeEditor
  aside
    ul
      li(v-for="item in resume.visibleItems"  v-bind:class='{ active: item === selected}' @click="selected = item") {{item}}
  div.pannel
    ol
      li(v-for="item in resume.visibleItems" v-show="item === selected"){{item}}
</template>

<script>
export default {
  name: 'ResumeEditor',
  data: () => ({
    selected: 'bio',
    resume: {
      visibleItems: ['bio', 'workhistory', 'education', 'projects', 'awards', 'contacts', 'others']
    }
  })
}
</script>

<style scoped lang="stylus">
.ResumeEditor
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width: 35%;
  display: flex;
  flex-direction: row;
  aside
    background-color: #000;
    color: #fff;
    width: 80px;
    ul
      list-style: none;
      margin-top: 20px;
      li
        height: 48px;
        line-height: 48px;
        width: 80px;
        text-align:center;
      li.active
        background-color: #fff;
        color: #000;
  .pannel
    overflow: auto;
    ol
      list-style: none;
</style>
