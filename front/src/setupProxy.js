const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",

    createProxyMiddleware({
      target: "http://localhost:5000",

      changeOrigin: true,
    })
  );
};
// javascript

// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();

// app.use(
//   "/api",
//   createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true })
// );
// app.listen(1234);
