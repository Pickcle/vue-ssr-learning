import Vue from 'vue'
import App from './app.vue'
// import { createRouter } from './router'
import { createStore } from './store/store'
// import { sync } from 'vuex-router-sync'

export function createApp () {
  // const router = createRouter()
  const store = createStore()

  // sync(store, router)
  // sync(store)

  const app = new Vue({
    // router,
    store,
    render: h => h(App)
  })

  // return { app, router, store }
  return { app, store }
}