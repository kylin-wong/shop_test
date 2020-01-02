import Vue from 'vue'

// 导入vant.js里面的组件
import './plugins/vant.js'

// 导入axios
import axios from 'axios'

// APP根文件 Router Vuex
import App from './App.vue'
import router from './router'
import store from './store'

// 导入字体图标
import './assets/font/iconfont.css'

// 组件 头，尾，评论块
import myHeader from './components/myCommon/myHeader.vue'
import myFooter from './components/myCommon/myFooter.vue'
import myComment from './components/myCommon/myComment.vue'
Vue.component('my-header', myHeader)
Vue.component('my-footer', myFooter)
Vue.component('my-comment', myComment)

// 整数转精度2位
Vue.filter('my-filter', function returnFloat(value) {
  var val = Math.round(parseFloat(value) * 100) / 100
  var xsd = value.toString().split('.')
  if (xsd.length === 1) {
    value = value.toString() + '.00'
    return value
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0'
    }
    return val
  }
})
// axios 配置
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
