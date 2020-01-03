import Vue from 'vue'

// 导入vant.js里面的组件
import './plugins/vant.js'

// APP根文件 Router Vuex
import App from './App.vue'
import router from './router'
import store from './store'

// 导入字体图标
import './assets/font/iconfont.css'

import axios from 'axios'
// 组件 头，尾，评论块
import myHeader from './components/myCommon/myHeader.vue'
import myFooter from './components/myCommon/myFooter.vue'
import myComment from './components/myCommon/myComment.vue'
Vue.component('my-header', myHeader)
Vue.component('my-footer', myFooter)
Vue.component('my-comment', myComment)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.filter('formatDate', function(time) {
  var date = new Date(time)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDay()
  return y + '-' + m + '-' + d
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




