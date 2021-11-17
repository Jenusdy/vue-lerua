import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Disposisi from '../views/disposisi/Index.vue'
import DisposisiCreate from '../views/disposisi/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/disposisi',
    name: 'Disposisi',
    component: Disposisi
  },
  {
    path: '/disposisi-create',
    name: 'Disposisi Create',
    component: DisposisiCreate
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
