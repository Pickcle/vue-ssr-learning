const path = require('path')
const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(path.resolve(__dirname, './dist/vue-ssr-server-bundle.json'), {})
const createApp = require('./src/app.js')

server.get('*', (req, res) => {
  const templateContext = {
    url: req.url
  }
  const app = createApp(templateContext)

  const htmlContext = {
    title: 'Vue SSR Demo',
    meta: `<meta charset="utf-8">`
  }

  renderer.renderToString(app, htmlContext, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)