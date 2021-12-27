const { merge } = require('webpack-merge')
const baseConfig = require('./base.js')
const TerserPlugin = require('terser-webpack-plugin')
const CriticalCssPlugin = require('critical-css-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'], // it's recommended to extract CSS for production
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
  plugins: [
    new MiniCssExtractPlugin(),
    new CriticalCssPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap(merge(baseConfig, prodConfig))
