const Vue = require('vue')

module.exports = function createApp (context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: `<div>您访问的URL是：{{ url }}</div>`
  })
}