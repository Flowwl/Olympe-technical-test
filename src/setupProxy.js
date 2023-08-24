const { createProxyMiddleware } = require('http-proxy-middleware');

const chillhopHost = "https://mp3.chillhop.com/"
module.exports = function(app) {
    app.use(
        '/chillhop',
        createProxyMiddleware({
            target: 'https://mp3.chillhop.com/',
            changeOrigin: true,
            headers: { "Control-Allow-Origin": "*"}
        })
    )
}
