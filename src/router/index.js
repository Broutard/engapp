import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      noAuth: true,
      applicationClass: 'application-bg',
    }
  },
  // {
  //   path: '/seances',
  //   name: 'Seances',
  //   // route level code-splitting
  //   // this generates a separate chunk (seances.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "seances" */ '../views/Seances.vue')
  // },
  {
    path: '/seance/:id',
    name: 'Seance',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (seance.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "seance" */ '../views/Seance.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  // mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  // check login
  const user = Store.getters.getUser
  const requiresAuth = !to.matched.some(route => route.meta.noAuth);
  // console.log(to,requiresAuth,user)

  if (requiresAuth && !user) {
    next({name: 'Login'});
  } else {
    next()
  }
})

export default router
