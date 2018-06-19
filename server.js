const fs = require('fs')
const path = require('path')
const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync(path.resolve(__dirname, './src/index.template.html'), 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  clientManifest,
  template
})

// const createApp = require('./src/app.js')

server.get('*', (req, res) => {
  // const templateContext = {
  //   url: req.url
  // }
  // const app = createApp(templateContext)

  const htmlContext = {
    title: 'Vue SSR Demo',
    meta: `<meta charset="utf-8">`
  }

  renderer.renderToString(htmlContext, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)