<template lang="jade">
div.ResumeEditor
  aside
    ul
      li(v-for="item in resume.itemsConfig"  v-bind:class='{ active: item.name === selected}' @click="selected = item.name")
        svg
          use(v-bind:xlink:href="'#icon-' + item.icon")
  div.pannel
    ol
      li(v-for="item in resume.itemsConfig" v-show="item.name === selected"){{ resume[item.name] }}
</template>

<script>
export default {
  name: 'ResumeEditor',
  data: () => ({
    selected: 'profile',
    resume: {
      itemsConfig: [{
        name: 'profile',
        icon: 'id'
      }, {
        name: 'workhistory',
        icon: 'work'
      }, {
        name: 'education',
        icon: 'book'
      }, {
        name: 'projects',
        icon: 'heart'
      }, {
        name: 'awards',
        icon: 'cup'
      }, {
        name: 'contacts',
        icon: 'phone'
      }],
      profile: {
        name: '',
        city: ''
      },
      workhistory: [],
      education: [],
      projects: [],
      awards: [],
      contacts: []
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
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px 0;
        svg
          width: 30px;
          height: 25px;
          fill: #fff;
      li.active
        background-color: #fff;
        color: #000;
        svg
          fill: #000;
  .pannel
    overflow: auto;
    ol
      list-style: none;
</style>
