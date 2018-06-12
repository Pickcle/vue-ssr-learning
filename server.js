const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})
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