import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'
import style from './style'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRTL: config.isRTL,
    dark: localStorage.getItem('dark'),
    drawer: true,
  },
  mutations: {
    UPDATE_RTL(state, val) {
      state.isRTL = val
    },
    UPDATE_DARK(state, val) {
      localStorage.setItem('dark', val)
      state.dark = val
    },
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer
    },
  },
  actions: {
  },
  modules: {
    style
  }
})
