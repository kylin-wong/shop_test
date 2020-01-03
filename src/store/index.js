import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: '/home'
  },
  mutations: {
    getUrl(state, step) {
      state.url = step
      console.log(state.url)
    }
  },
  actions: {
  },
  modules: {
  }
})
