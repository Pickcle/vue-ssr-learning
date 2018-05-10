const server = require('express')()

const { createBundleRenderer } = require('vue-server-renderer')

const htmlTemplate = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: htmlTemplate,
  clientManifest
})

server.get('*', (req, res) => {
  const appContext = {
    url: req.url
  }

  const htmlContext = {
    title: 'vue-ssr-demo'
  }

  renderer.renderToString(appContext, htmlContext).then(html => {
    res.end(html)
  })
})

server.listen(8080, function () {
  console.log('> listening at 8080\n')
})