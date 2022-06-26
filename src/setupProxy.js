const { createProxyMiddleware } = require('http-proxy-middleware');

// 프록시 설정
module.exports = (app) => {
  app.use(
    createProxyMiddleware(process.env.REACT_APP_API_BASE_URL, {
      target: process.env.REACT_APP_API_PORT_PATH,
      changeOrigin: true,
    }),
  );
};
