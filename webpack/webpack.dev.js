const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const common = require('./webpack.common.js')

/* const webpack = require("webpack") */

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    historyApiFallback: true,
    port: 8002,
    proxy: {
      '/': {
        target: 'http://localhost:5002'
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Development Title',
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
      favicon: path.join(__dirname, '../src/assets/images/favicon.ico')
    })
  ]
})

/* module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}; */