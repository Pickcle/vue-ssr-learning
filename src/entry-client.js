import { createApp } from './app'

// const { app, router, store } = createApp()

const { app, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app')

// router.onReady(() => {
//   app.$mount('#app')
// })