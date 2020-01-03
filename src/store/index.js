import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopId: [],
    shop: [],
    fromUrl: '/home',
    toUrl: '/'
  },
  mutations: {
    carList(state, step) {
      const obj = {
        id: step.id,
        num: step.num
      }
      if (state.shop.indexOf(step.id) !== -1) {
        state.shopId.forEach(item => {
          if (item.id === step.id) {
            item.num = step.num
          }
        })
        console.log(state.shopId)
        return false
      }
      state.shop.push(step.id)
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
