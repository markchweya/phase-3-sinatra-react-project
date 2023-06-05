const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/contacts',
      createProxyMiddleware({
        target: 'http://localhost:4253',
        changeOrigin: true,
      })
    );
};
  