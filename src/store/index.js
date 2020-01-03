import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fromUrl: '/home',
    toUrl: '/'
  },
  mutations: {
    setFromUrl(state, step) {
      state.fromUrl = step
    },
    setToUrl(state, step) {
      state.toUrl = step
    }
  },
  actions: {
  },
  modules: {
  }
})
