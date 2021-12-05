const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')
const TerserPlugin = require('terser-webpack-plugin')
const CriticalCssPlugin = require('critical-css-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'], // it's recommended to extract CSS for production
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CriticalCssPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = merge(baseConfig, prodConfig)
