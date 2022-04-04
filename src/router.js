import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '@/views/overview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
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
    path: '/goals',
    name: 'Goals',
    component: () => import(/* webpackChunkName: "about" */ '@/views/documentation/goals')
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
