import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRTL: false,
  },
  mutations: {
    UPDATE_RTL(state, val) {
      state.isRTL = val
    },
  },
  actions: {
  },
  modules: {
  }
})
