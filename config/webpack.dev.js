const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: [
          "webpack-hot-middleware/client?reload=true",
          "react-hot-loader/patch",
          "./src/client/index.tsx"
        ]
    },
    mode: "development",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    devServer: {
      contentBase: "dist",
      publicPath: "/",
      overlay: true,
      progress: true,
      hot: true,
      stats: {
        colors: true
      }
    },
    devtool: 'inline-sourse-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader"
          },
          include: /src/,
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: "react-hot-loader/webpack"
          },
          include: /node_modules/,
          exclude: /src/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: 'css-modules-typescript-loader'
            },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin({template: "./public/index.html"}),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify("development")
        }
      }),
    ]
}