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
    component: () => import(/* webpackChunkName: "documentation" */ '@/views/documentation')
  },
  {
    path: '/new-features',
    name: 'New Features',
    component: () => import(/* webpackChunkName: "new-features" */ '@/views/documentation/new-features')
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '@/views/documentation/goals')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "props" */ '@/views/documentation/props')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo')
  },
  {
    path: '/slots',
    name: 'Slots',
    component: () => import(/* webpackChunkName: "slots" */ '@/views/documentation/slots')
  },
  {
    path: '/emits',
    name: 'Emits',
    component: () => import(/* webpackChunkName: "emits" */ '@/views/documentation/emits')
  },
  {
    path: '/themes',
    name: 'Themes',
    component: () => import(/* webpackChunkName: "themes" */ '@/views/documentation/themes')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '@/views/documentation/settings')
  },
  {
    path: '/column-settings',
    name: 'Column Settings',
    component: () => import(/* webpackChunkName: "column-settings" */ '@/views/documentation/column-settings')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
