const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')

const devConfig = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // it's recommended to use style-loader for development since it works faster
      },
    ]
  }
}

module.exports = merge(baseConfig, devConfig)
