<template lang="jade">
div.ResumePreview
  ol.main
    li(v-for="(item, order) in $store.state.resumeTemplate" v-bind:class="item.name")
      h3(v-if="clearResume[item.name]") {{item.title}}
      ul
        li.section(v-for="(section, index) in clearResume[item.name]")
          ul
            li.item(v-for="(val, idx) in section")
              label {{item.template[idx].item}}
              p {{val}}
  ol.rightbar
    li(v-for="(item, order) in $store.state.resumeTemplate" v-bind:class="item.name")
      h3(v-if="clearResume[item.name]") {{item.title}}
      ul
        li.section(v-for="(section, index) in clearResume[item.name]")
          ul
            li.item(v-for="(val, idx) in section")
              label {{item.template[idx].item}}
              p {{val}}
</template>

<script>
export default {
  name: 'ResumePreview',
  data: () => ({
    msg: 'I am resumer preview.'
  }),
  computed: {
    clearResume () {
      return this.$store.getters.clearResume
    }
  }
}
</script>

<style scoped lang="stylus">
.ResumePreview
  background-color: #fff;
  box-shadow: #ddd 0 0 10px;
  margin-left: 10px;
  display: flex;
  flex-grow: 1;
  max-width: 800px;
  line-height: 2;
  ol,ul
    list-style: none;
  ol
    padding: 20px;
    display: flex;
  ol.main
    flex-grow: 1;
    flex-direction: column;
    word-wrap: break-word;
    word-break:break-all;
    .profile,.contacts
      display: none;
    h3
      border-bottom: 2px solid;
    label
      font-size: 0.85em;
      font-weight: 700;
      font-family: '宋体';
  ol.rightbar
    flex-direction: column;
    width: 240px;
    background-color: #000;
    color: #fff;
    .profile,.contacts
      display: block;
    .profile
      .section ul
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li
          flex-grow: 1;
          text-align: center;
        li:nth-child(1)
          width: 100%;
          font-size: 36px;
          border-bottom: 2px solid;
          label
            display: none;
      h3
        display: none;
    .contacts
      .section ul
        display: table;
        .item
          display: table-row;
        label
          padding-right: 20px;
          font-weight: 700;
        label,p
          display: table-cell;
        .item:nth-child(2) p
          font-size: 0.8em;
  ol.rightbar> li
    display: none;
    flex-grow: 1;
</style>
