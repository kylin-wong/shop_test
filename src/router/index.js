import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/home.vue'
import Member from '../components/Member/member.vue'
import Shopcar from '../components/Shopcar/shopcar.vue'
import Search from '../components/Search/search.vue'
import PhotoInfo from '../components/photo/Info.vue'
import PhotoList from '../components/photo/List.vue'
import Photo from '../components/photo/Photo.vue'

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
    path: '/photo',
   component: Photo, 
    children: [
      { path: 'list', component: PhotoList },
      { path: 'Info/:id', component: PhotoInfo }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
