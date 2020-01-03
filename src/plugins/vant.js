// 导入vue
import Vue from 'vue'

import {
  Cell,
  CellGroup,
  SubmitBar,
  Sticky,
  Dialog,
  Tag,
  Card,
  Notify,
  Tab,
  Tabs,
  Lazyload,
  Image,
  Tabbar,
  Icon,
  TabbarItem,
  NavBar,
  Loading,
  Stepper,
  Toast,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  PullRefresh,
  List,
  Search,
  Col,
  Row,
  Divider,
  Button
} from 'vant'
Vue.use(List)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
// Vue.use(Divider)
Vue.use(Icon)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Card)
Vue.use(SubmitBar)
Vue.use(Sticky)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(PullRefresh)
Vue.prototype.Dialog = Dialog
Vue.prototype.$message = Notify
Vue.use(Tab).use(Tabs)
Vue.use(Lazyload)
Vue.use(Notify)
Vue.use(Loading)
Vue.use(Stepper)
Vue.use(Toast)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Search)
Vue.use(Tag)
Vue.use(Tabbar)
Vue.use(Grid)
