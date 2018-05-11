import Vue from 'vue'
import Router from 'vue-router'
import Apple from './apple.vue'
import Banana from './banana.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routers: [
      {
        path: '/apple',
        component: Apple
        // component: () => import('./apple.vue')
      },
      {
        path: '/banana',
        component: Banana
        // component: () => import('./banana.vue')
      },
      {
        path: '*',
        redirect: '/apple'
      }
    ]
  })
}