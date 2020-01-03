import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopId: [],
    fromUrl: '/home',
    toUrl: '/'
  },
  mutations: {
    carList(state, step) {
      const obj = {
        id: step.id,
        num: step.num
      }
      state.shopId.push(obj)
      console.log(state.shopId)
    },
    setFromUrl(state, step) {
      state.fromUrl = step
    },
    setToUrl(state, step) {
      state.toUrl = step
    }
  },
  actions: {},
  modules: {}
})
