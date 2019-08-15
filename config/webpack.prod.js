const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/client/index.tsx"
    },
    mode: "production",
    output: {
      filename: "[name]-[contenthash].js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json']
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
          test: /\.scss$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader,
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
      new OptimizeCSSAssetsPlugin(),
      new MiniCSSExtractPlugin({
        filename: "[name]-[contenthash].css"
      }),
      new HTMLWebpackPlugin({template: "./public/index.html"}),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify("production")
        }
      }),
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ]
}