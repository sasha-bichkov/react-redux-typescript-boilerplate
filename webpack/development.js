const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')

const path = require('path')

const devConfig = {
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'], // it's recommended to use style-loader for development since it works faster
      },
    ]
  },
}

module.exports = merge(baseConfig, devConfig)
