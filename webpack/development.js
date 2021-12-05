const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')

const devConfig = {
  mode: 'development',
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
