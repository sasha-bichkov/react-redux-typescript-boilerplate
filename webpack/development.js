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
    rules: [{
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], // it's recommended to use style-loader for development since it works faster
    }, {
      test: /\.(scss|css)$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [
          'app/scss/abstracts/_breakpoints.scss',
          'app/scss/abstracts/_functions.scss',
          'app/scss/abstracts/_mixins.scss',
          'app/scss/abstracts/_placeholders.scss',
          'app/scss/abstracts/_variables.scss'
        ]
      }
    }]
  },
}

module.exports = merge(baseConfig, devConfig)
