const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // it's recommended to extract CSS for production
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

module.exports = merge(baseConfig, prodConfig)
