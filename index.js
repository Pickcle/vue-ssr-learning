const Vue = require('vue')
const server = require('express')()
const htmlTemplate = require('fs').readFileSync('./index.template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({
  template: htmlTemplate
})

const context = {
  title: 'vue-ssr-demo'
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>您访问的URL是：{{ url }}</div>`
  })

  renderer.renderToString(app, context).then(html => {
    res.end(html)
  })
})

server.listen(8080)