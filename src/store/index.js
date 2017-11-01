import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    currentUser: api.currentUser
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login (state, username, password) {
      api.login(username, password)
      console.log(username + '  ' + password)
      state.currentUser = api.currentUser()
    },
    logout (state) {
      api.logout()
      state.currentUser = api.currentUser()
    }
  }
})
export default store
