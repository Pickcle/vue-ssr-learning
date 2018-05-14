const server = require('express')()
const Vue = require('vue')

const { createBundleRenderer, createRenderer } = require('vue-server-renderer')

const htmlTemplate = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  clientManifest,
  template: htmlTemplate
})

// const renderer = createRenderer({
//   template: htmlTemplate
// })

server.get('*', (req, res) => {
  const appContext = {
    url: req.url
  }

  const htmlContext = {
    title: 'vue-ssr-demo'
  }

  // const app = new Vue({
  //   template: `<div>demo</div>`
  // })

  // renderer.renderToString(app).then(html => {
  //   res.end(html)
  // })

  // renderer.renderToString(appContext).then(html => {
  //   res.end(html)
  // }).catch(err => {
  //   console.log(err)
  // })

  renderer.renderToString((err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

server.listen(8080, function () {
  console.log('> listening at 8080\n')
})