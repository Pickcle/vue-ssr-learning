const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const app = express()

const template = fs.readFileSync(path.resolve(__dirname, './src/index.template.html'), 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  clientManifest,
  template
})

app.use('/dist', express.static('./dist'))

// const createApp = require('./src/app.js')

app.get('*', (req, res) => {
  // const templateContext = {
  //   url: req.url
  // }
  // const app = createApp(templateContext)

  const htmlContext = {
    meta: `<meta charset="utf-8">`,
    title: 'Vue SSR Demo'
  }

  renderer.renderToString(htmlContext, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

const port = 8080

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})