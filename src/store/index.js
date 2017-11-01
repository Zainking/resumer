import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
    // currentUser: api.currentUser
  },
  computed: {
    currentUser: function () {
      return api.currentUser
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login (state, payload) {
      api.login(payload.username, payload.password)
      console.log('store commit: ' + this.currentUser)
      setTimeout(function () {
        console.log(api.currentUser)
      }, 2000)
    },
    logout (state) {
      api.logout()
      console.log('store commit: ' + this.currentUser)
    }
  }
})
export default store
