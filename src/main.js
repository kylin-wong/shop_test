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

// 时间格式换
Vue.filter('my-date', function dateFormat(date, fmt = 'YYYY-mm-dd') {
  let ret
  date = new Date(date)
  let opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString() // 日
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  }
  return '商品上架时间：' + fmt
})
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
