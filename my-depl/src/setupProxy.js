const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://35.88.148.173:8080',
      chageOrigin: true,
    })
  );
};
