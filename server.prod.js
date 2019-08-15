require('babel-polyfill');
const express = require("express");
const expressStaticGzip = require('express-static-gzip');
const http = require('http');
const path = require("path");
const webpack = require("webpack");

import React from 'react';
const ReactDOMServer = require('react-dom/server');

const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, 'dist', 'index.html');

const config = require("../../config/webpack.prod.js");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

const staticMiddleware = express.static(path.resolve(__dirname, 'dist'));

const app = express();
const server = http.createServer(app);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);
//app.use(staticMiddleware);

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<div>Hello SSR</div>);
  res.send(html);
});

// app.all(['*'], (req, res, next) => {
//   console.log(INDEX, 'index')
//     res.sendFile(INDEX);
//   });

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`); 
  })