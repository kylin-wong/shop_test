// 导入vue
import Vue from 'vue'

<<<<<<< HEAD
import { Button, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, Icon, Cell, CellGroup, SubmitBar, Sticky, Dialog, Card, Notify, Tab, Tabs, TabbarItem, NavBar } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)

=======
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
  Loading
} from 'vant'
Vue.use(CellGroup)
Vue.use(Cell)
>>>>>>> 91343ce747dc65862e19a5fb3ee6fdd55f9c1ead
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
