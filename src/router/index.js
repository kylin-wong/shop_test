import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/home.vue'
import Member from '../components/Member/member.vue'
import Shopcar from '../components/Shopcar/shopcar.vue'
import Search from '../components/Search/search.vue'
import BuyGoods from '../components/Home/buyGoods/BuyGoods.vue'
import MyComment from '../components/myCommon/myComment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/buyGoods',
    component: BuyGoods
  },
  {
    path: '/myComment',
    component: MyComment
  }
]

const router = new VueRouter({
  routes
})

export default router
