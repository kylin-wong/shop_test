<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {}
})
=======
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
>>>>>>> eb6fdab1377999f2f1dc60601f67ff5469119002
