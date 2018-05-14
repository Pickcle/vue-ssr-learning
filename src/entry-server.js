import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    // const { app, router, store } = createApp()
    const { app, store } = createApp()

    context.state = store.state

    resolve(app)

  //   router.push(context.url)

  //   router.onReady(() => {
  //     const matchedComponents = router.getMatchedComponents()
  //     console.log('-----xhjLog-----router', matchedComponents)
  //     if (!matchedComponents.length) {
  //       return reject({ code: 404 })
  //     }

  //     Promise.all(matchedComponents.map(Component => {
  //       if (Component.asyncData) {
  //         return Component.asyncData({
  //           store,
  //           route: router.currentRoute
  //         })
  //       }
  //     })).then(() => {
  //       context.state = store.state
        
  //       resolve(app)
  //     }).catch(reject)
  //   }, reject)
  })
}