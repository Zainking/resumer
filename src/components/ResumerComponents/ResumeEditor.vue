<template lang="jade">
div.ResumeEditor
  aside
    ul
      li(v-for="item in $store.state.resumeTemplate" v-bind:class="{active: item.name === selected}" @click="selected = item.name")
        svg
          use(v-bind:xlink:href="'#icon-' + item.icon")
  div.pannel
    ol
      li(v-for="(item, order) in $store.state.resumeTemplate" v-show="item.name === selected")
        h3 {{item.title}}
          a(href='javascript:;' v-if="!item.isSingle" @click="$store.commit('addItem', {order})").additem +
        h2(v-show='!resumer[item.name] || resumer[item.name].length === 0').nodata 暂无数据
        ul
          li.section(v-for="(section, index) in resumer[item.name]")
            ul
              li.item(v-for="(val, idx) in section")
                label {{item.template[idx].item}}
                input(v-bind:type='item.template[idx].type' v-bind:value='val' @input='$store.commit("doInput", {name: item.name, index, idx, val: $event.target.value})')
            a(href='javascript:;' v-if="!item.isSingle" @click="$store.commit('removeItem', {order, index})").removeitem -
</template>

<script>
export default {
  created () {
    this.$store.commit('singleInit')
  },
  name: 'ResumeEditor',
  data: () => ({
    selected: 'profile'
  }),
  computed: {
    resumer () {
      return this.$store.state.resume
    }
  }
}
</script>

<style scoped lang="stylus">
.ResumeEditor
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  width: 35%;
  display: flex;
  flex-direction: row;
  max-height: 80vh;
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
    h2.nodata
      text-align: center;
      color: #aaa;
    ol,ul
      list-style: none;
      .additem, .removeitem
        padding: 0px 10px;
        text-decoration: none;
        color: #fff;
        background-color: #ddd;
        transition: all 0.3s;
        display: inline-block;
        float: right;
      .removeitem
        position: relative;
        top: 10px;
      .additem:hover
        background-color: #02af5f;
      .removeitem:hover
        background-color: #f00;
      .section
        margin: 20px 0;
        border-bottom: 1px solid #ddd;
        padding-bottom: 50px;
        .item
          label
            display: block;
          input
            width: 100%;
            line-height: 2;

</style>
