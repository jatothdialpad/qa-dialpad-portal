const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://dialpad-qa-portal-backend-latest.onrender.com/',
            changeOrigin: true,
        })
    );
};