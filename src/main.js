import Vue from 'vue'

// 导入vant.js里面的组件
import './plugins/vant.js'

// APP根文件 Router Vuex
import App from './App.vue'
import router from './router'
import store from './store'
// 导入axios
import axios from 'axios'

// 导入字体图标
import './assets/font/iconfont.css'

// 组件 头，尾，评论块
import myHeader from './components/myCommon/myHeader.vue'
import myFooter from './components/myCommon/myFooter.vue'
import myComment from './components/myCommon/myComment.vue'
Vue.component('my-header', myHeader)
Vue.component('my-footer', myFooter)
Vue.component('my-comment', myComment)

Vue.config.productionTip = false
// 设置根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios
// 时间过滤器
Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
