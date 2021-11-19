import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Disposisi from '../views/disposisi/Index.vue'
import DisposisiCreate from '../views/disposisi/Create.vue'
import Login from '../views/Login.vue'
import VueOffline from '../views/VueOffline.vue';
import Penyimpanan from '../views/Penyimpanan.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isRouteFound: true,
      isAdmin: true
    }
  },{
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      isRouteFound: true,
      isAdmin: true
    }
  },
  {
    path: '/disposisi',
    name: 'Disposisi',
    component: Disposisi,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/disposisi-create',
    name: 'Disposisi Create',
    component: DisposisiCreate,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/vue-offline',
    name: 'Vue Offline',
    component: VueOffline,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/penyimpanan',
    name: 'Penyimpanan',
    component: Penyimpanan,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '*',
    component: () => import('../components/404.vue'),
    meta: {
      isRouteFound: false
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.matched);
  if (to.matched.some(record => record.meta.isRouteFound)) {
    let userId = localStorage.getItem('id_user')
    if (to.name !== 'Login' && !userId) {
      alert("Belum login")
      next({
        name: "Login"
      })
    } else if (to.name == 'Login' && userId != null) {
      alert("Sudah login")
      next({
        name: 'Home'
      })
    } else {
      if (to.matched.some(record => record.meta.isAdmin)) {
        alert("Admin")
        next()
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
