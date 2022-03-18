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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
