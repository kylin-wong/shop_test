import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/home.vue'
import Member from '../components/Member/member.vue'
import Shopcar from '../components/Shopcar/shopcar.vue'
import Search from '../components/Search/search.vue'
<<<<<<< HEAD
import PhotoList from '../components/Home/Photo/PhotoList.vue'
import Detail from '../components/news/detail.vue'
=======
import PhotoList from '../components/Photo/PhotoList.vue'
>>>>>>> eb6fdab1377999f2f1dc60601f67ff5469119002

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
    path: '/photo/list',
    component: PhotoList
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

// 路由后置钩子
// router.afterEach((to, from) => {
//   console.log(to, from)
//   console.log(store)
//   store.commit('setFromUrl', from.path)
//   store.commit('setToUrl', to.path)
// })
export default router
