import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRTL: config.isRTL,
    dark: config.dark
  },
  mutations: {
    UPDATE_RTL(state, val) {
      state.isRTL = val
    },
    UPDATE_DARK(state, val) {
      state.dark = val
    },
  },
  actions: {
  },
  modules: {
  }
})
