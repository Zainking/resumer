import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: api.currentUser,
    resumeTemplate: [{
      name: 'profile',
      icon: 'id',
      isSingle: true,
      title: '个人信息',
      template: [
        {item: '姓名', type: 'text'},
        {item: '年龄', type: 'number'},
        {item: '所在地', type: 'text'}
      ]
    }, {
      name: 'workhistory',
      icon: 'work',
      isSingle: false,
      title: '工作经历',
      template: [
        {item: '工作地点', type: 'text'},
        {item: '开始时间', type: 'date'},
        {item: '结束时间', type: 'date'},
        {item: '工作内容', type: 'text'}
      ]
    }, {
      name: 'education',
      icon: 'book',
      isSingle: false,
      title: '教育经历',
      template: [
        {item: '学校', type: 'text'},
        {item: '学历', type: 'text'},
        {item: '开始时间', type: 'date'},
        {item: '结束时间', type: 'date'}
      ]
    }, {
      name: 'projects',
      icon: 'heart',
      isSingle: false,
      title: '项目经验',
      template: [
        {item: '项目名称', type: 'text'},
        {item: '项目介绍', type: 'text'},
        {item: '负责内容', type: 'text'}
      ]
    }, {
      name: 'awards',
      icon: 'cup',
      isSingle: false,
      title: '获奖经历',
      template: [
        {item: '奖项名称', type: 'text'},
        {item: '奖项介绍', type: 'text'}
      ]
    }, {
      name: 'contacts',
      icon: 'phone',
      isSingle: true,
      title: '联系方式',
      template: [
        {item: '手机', type: 'text'},
        {item: 'Email', type: 'text'},
        {item: 'QQ', type: 'text'},
        {item: '微信', type: 'text'}
      ]
    }
    ],
    resume: {}
  },
  mutations: {
    login (state, payload) {
      state.currentUser = payload
    },
    logout (state) {
      state.currentUser = false
      state.resume = {}
    },
    singleInit (state) {
      state.resumeTemplate.forEach(function (val, idx) {
        if (val.isSingle) {
          if (!state.resume[val.name]) {
            state.resume[val.name] = [[]]
          }
          val.template.forEach(function (item, index) {
            if (!state.resume[val.name][0][index]) {
              state.resume[val.name][0][index] = ''
            }
          })
        }
      })
    },
    addItem (state, payload) {
      var arr = []
      var name = state.resumeTemplate[payload.order].name
      state.resumeTemplate[payload.order].template.forEach(function () {
        arr.push('')
      })
      if (!state.resume[name]) {
        Vue.set(state.resume, name, [])
      }
      Vue.set(state.resume[name], state.resume[name].length, arr)
    },
    removeItem (state, payload) {
      var name = state.resumeTemplate[payload.order].name
      state.resume[name].splice(payload.index, 1)
    },
    doInput (state, payload) {
      state.resume[payload.name][payload.index][payload.idx] = payload.val
    },
    setResumeId (state, payload) {
      Vue.set(state.resume, 'id', payload.id)
    },
    resumeInit (state, payload) {
      state.resume = payload.resume
      Vue.set(state.resume, 'id', payload.id)
    }
  },
  actions: {
    login ({commit}, payload) {
      api.login(payload.username, payload.password, (currentUser) => {
        store.commit('login', currentUser)
      })
    },
    resumeInit ({commit}) {
      api.getResume((resume, id) => {
        store.commit('resumeInit', {resume, id})
      })
    }
  }
})
export default store
