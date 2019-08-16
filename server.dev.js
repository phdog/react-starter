const express = require("express");
const http = require('http');
const path = require("path");
const webpack = require("webpack");

const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, 'dist', 'index.html');

const config = require("./config/webpack.dev.js");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

const staticMiddleware = express.static(path.resolve(__dirname, 'dist'));

const app = express();
const server = http.createServer(app);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);
app.use(staticMiddleware);

app.all(['*'], (req, res, next) => {
    res.sendFile(INDEX);
  });

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})