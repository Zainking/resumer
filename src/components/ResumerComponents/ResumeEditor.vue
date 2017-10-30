<template lang="jade">
div.ResumeEditor
  aside
    ul
      li(v-for="item in resume.itemsConfig"  v-bind:class='{ active: item.name === selected}' @click="selected = item.name")
        svg
          use(v-bind:xlink:href="'#icon-' + item.icon")
  div.pannel
    ol
      li(v-for="item in resume.itemsConfig" v-show="item.name === selected")
        h3 {{item.name}}
        ul
          li.section(v-for="section in resume[item.name]")
            ul
              li.item(v-for="(val, key) in section")
                label {{key}}
                input(type='text' v-model='section[key]')
</template>

<script>
export default {
  name: 'ResumeEditor',
  data: () => ({
    selected: 'Profile',
    resume: {
      itemsConfig: [{
        name: 'Profile',
        icon: 'id'
      }, {
        name: 'Workhistory',
        icon: 'work'
      }, {
        name: 'Education',
        icon: 'book'
      }, {
        name: 'Projects',
        icon: 'heart'
      }, {
        name: 'Awards',
        icon: 'cup'
      }, {
        name: 'Contacts',
        icon: 'phone'
      }],
      Profile: [{
        name: '',
        city: '',
        title: ''
      }],
      Workhistory: [],
      Education: [],
      Projects: [],
      Awards: [{
        name: '宇宙装逼一等奖',
        context: '装逼得来的'
      }, {
        name: '宇宙装逼一等奖',
        context: '装逼得来的'
      }],
      Contacts: []
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
    flex-grow: 1;
    padding: 20px;
    line-height: 2;
    h3
      text-align: center;
    ol,ul
      list-style: none;
      .section
        margin: 20px 0;
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
        .item
          label
            display: block;
          input
            width: 100%;
            line-height: 2;

</style>
