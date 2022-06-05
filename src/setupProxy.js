const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = process.env.REACT_APP_API_URL + '/*';

// 프록시 설정
module.exports = (app) => {
  app.use(
    createProxyMiddleware([API_URL], {
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
    }),
  );
};
