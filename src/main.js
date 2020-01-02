//导入vant.js的按需组件的信息
//导入vant.js里面的组件
import './plugins/vant.js'
import App from './App.vue'
import router from './router'
import store from './store'
//导入字体图标
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
