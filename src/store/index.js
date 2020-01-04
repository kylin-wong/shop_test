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
    },
    addnum(state, id) {
      console.log('====================================')
      console.log(state.shopId)
      console.log(id)
      console.log('====================================')
      let i = state.shopId.findIndex(item => item.id === id)
      console.log(i)
      state.shopId[i].num++
      console.log(state.shopId[i].num)
    },
    cutnum(state, id) {
      console.log('====================================')
      console.log(id)
      console.log('====================================')
      let i = state.shopId.findIndex(item => item.id === id)
      state.shopId[i].num--
      console.log(state.shopId[i].num)
    },
    delstate(state, i) {
      state.shopId[i].splice(i, 1)
      state.shop[i].splice(i, 1)
      console.log(state.shopId)
    }
  },
  actions: {},
  modules: {}
})
