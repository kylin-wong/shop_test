import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopId: []
  },
  mutations: {
    carList(state, step) {
      state.shopId.push(step)
      console.log(state.shopId)
    }
  },
  actions: {
  },
  modules: {
  }
})
