// 导入vue
import Vue from 'vue'

import {
  Button,
  Image,
  Row,
  Icon,
  Lazyload,
  Divider,
  Col,
  Search,
  Tabbar,
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
  List
} from 'vant'
Vue.use(List)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Row)
Vue.use(Tag)
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
Vue.use(Notify)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Stepper)
Vue.use(Toast)
Vue.use(Divider)
Vue.use(Col)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(Grid)
