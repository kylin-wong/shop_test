// 导入vue
import Vue from 'vue'
import { Cell, CellGroup, SubmitBar, Sticky, Dialog, Divider, Button, Row, Col, Search, Tag, Card, Notify, Tab, Tabs, Lazyload, Image } from 'vant'
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Notify)
Vue.use(SubmitBar)
Vue.use(Sticky)

Vue.use(Dialog)
Vue.prototype.Dialog = Dialog
Vue.prototype.$message = Notify
Vue.use(Tab).use(Tabs)
Vue.use(Lazyload)
Vue.use(Image)
