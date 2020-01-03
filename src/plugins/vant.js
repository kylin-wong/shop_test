// 导入vue
import Vue from 'vue'

import {
  Search,
  Divider,
  Tabbar,
  Col,
  Row,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  Icon,
  Cell,
  CellGroup,
  SubmitBar,
  Sticky,
  Dialog,
  Card,
  Notify,
  Tab,
  Tabs,
  TabbarItem,
  NavBar,
  Loading
} from 'vant'

Vue.use(Divider)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Cell)
Vue.use(CellGroup)

Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
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
Vue.use(Image)
Vue.use(Notify)
Vue.use(Loading)
