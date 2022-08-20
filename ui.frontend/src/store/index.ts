import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store = new Store({
  state: {
    name: '',
    password: '',

    buttonlogin: '',
    control1: true,
    control2: true,
    user: '',
    timer: 600

  },
  getters: {},
  mutations: {
    setName (state, name) {
      state.name = name
      if (/^(\w)+\.(\w)+$/.test(name)) {
        localStorage.setItem('name', name)
      } else {
        localStorage.setItem('name', '')
      }
    },
    setPassword (state, password) {
      state.password = password
      if (/^\d{6,9}$/.test(password)) {
        localStorage.setItem('password', password)
      } else {
        localStorage.setItem('password', '')
      }
    },
    setButtonLogin (state, buttonlogin) {
      state.buttonlogin = buttonlogin
    }
  },
  actions: {
    setButtonLogin ({ commit }, buttonlogin) {
      commit('setButtonLogin', buttonlogin)
    },
    setName ({ commit }, name) {
      commit('setName', name)
    },
    setPassword ({ commit }, password) {
      commit('setPassword', password)
    }
  },
  modules: {}
})

export default store
