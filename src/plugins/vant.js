//导入vue
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message