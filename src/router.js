import Vue from 'vue'
import VueRouter from 'vue-router'
import EnglishPremierLeage from '@/views/english-premier-leage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'English Premier Leage',
    component: EnglishPremierLeage
  },
  {
    path: '/documentation',
    name: 'Documentation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation')
  },
  {
    path: '/new-features',
    name: 'New Features',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/new-features')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/props')
  },
  {
    path: '/slots',
    name: 'Slots',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/slots')
  },
  {
    path: '/emits',
    name: 'Emits',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/emits')
  },
  {
    path: '/themes',
    name: 'Themes',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/themes')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/settings')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
