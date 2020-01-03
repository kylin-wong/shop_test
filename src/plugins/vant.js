// 导入vue
import Vue from 'vue'

import {
  Cell,
  CellGroup,
  SubmitBar,
  Sticky,
  Dialog,
  Divider,
  Button,
  Row,
  Col,
  Search,
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
  Grid,
  GridItem,
  PullRefresh,
  List,
  Toast
} from 'vant'
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Tabbar)
Vue.use(Icon)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Card)
Vue.use(Notify)
Vue.use(SubmitBar)
Vue.use(Sticky)
Vue.use(Dialog)
Vue.use(Tab).use(Tabs)
Vue.use(Lazyload)
Vue.use(Image)
Vue.prototype.Dialog = Dialog
Vue.prototype.$message = Notify
Vue.use(Tab).use(Tabs)
Vue.use(Lazyload)
Vue.use(Notify)
Vue.use(Loading)
Vue.use(List)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(PullRefresh)
Vue.use(Toast)
