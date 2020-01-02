// 导入vue
import Vue from 'vue'
<<<<<<< HEAD
import { Divider, Button, Row, Col, Search, Tag, Tab, Tabs, Lazyload, Image } from 'vant'
=======
import { SubmitBar, Sticky, Dialog, Divider, Button, Row, Col, Search, Tag, Card, Notify, Tab, Tabs, Lazyload, Image } from 'vant'
>>>>>>> a03c2181a6d1e52eb240bd49531598a847528aab
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
