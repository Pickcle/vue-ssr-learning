const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const app = express()

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const templatePath = path.resolve(__dirname, './src/index.template.html')

// const renderer = createBundleRenderer(serverBundle, {
//   clientManifest,
//   template
// })

readyPromise = require('./build/setup-dev-server.js')(
  app,
  templatePath,
  (bundle, options) => {
    renderer = createBundleRenderer(bundle, options)
  }
)

app.use('/dist', express.static('./dist'))

// const createApp = require('./src/app.js')

const htmlContext = {
  meta: `<meta charset="utf-8">`,
  title: 'Vue SSR Demo'
}

function render (req, res) {
  renderer.renderToString(htmlContext, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page Not Found')
      } else {
        res.status(500).end('Internal Server Error')
      }
      return
    }
    res.end(html)
  })
}

app.get('*', (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = 8080

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})