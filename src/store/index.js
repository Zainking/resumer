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
    login (state, payload) {
      state.currentUser = payload
    },
    logout (state) {
      state.currentUser = false
    }
  },
  actions: {
    login ({commit}, payload) {
      api.login(payload.username, payload.password, (currentUser) => {
        store.commit('login', currentUser)
      })
    }
  }
})
export default store
