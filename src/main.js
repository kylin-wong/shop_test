import Vue from 'vue'
// 导入vant.js里面的组件
import './plugins/vant.js'
// APP根文件 Router Vuex
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
