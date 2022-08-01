const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 'http://localhost:3001';

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/classRoom", {
      target: port,
      secure: false,
      changeOrigin: true
    }),
    createProxyMiddleware("/student", {
      target: port,
      secure: false,
      changeOrigin: true
    }),
  );

};