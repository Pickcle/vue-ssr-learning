import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routers: [
      {
        path: '/apple',
        component: () => import('./apple.vue')
      },
      {
        path: '/banana',
        component: () => import('./banana.vue')
      },
      {
        path: '*',
        redirect: '/apple'
      }
    ]
  })
}