const proxy = require('http-proxy-middleware')

const { DEV_PROXY } = process.env

module.exports = app => {
  if (DEV_PROXY) {
    app.use(
      proxy('/api', {
        target: DEV_PROXY,
        changeOrigin: true,
      })
    )
  }
}
