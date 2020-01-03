// 导入vue
import Vue from 'vue'
import { SubmitBar, Sticky, Dialog, Divider, Button, Row, Col, Search, Tag, Card, Notify, Tab, Tabs, Lazyload, Image, Field, cellGroup } from 'vant'
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
Vue.use(Field)
Vue.use(cellGroup)

Vue.use(Dialog)
Vue.prototype.Dialog = Dialog
Vue.prototype.$message = Notify
Vue.use(Tab).use(Tabs)
Vue.use(Lazyload)
Vue.use(Image)
