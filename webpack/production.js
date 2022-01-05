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
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader', {
        loader: 'sass-resources-loader',
        options: {
          hoistUseStatements: true,
          resources: [
            'app/scss/abstracts/_breakpoints.scss',
            'app/scss/abstracts/_functions.scss',
            'app/scss/abstracts/_mixins.scss',
            'app/scss/abstracts/_placeholders.scss',
            'app/scss/abstracts/_variables.scss'
          ]
        }
      }] // it's recommended to extract CSS for production
    }]
  },
  plugins: [
    new CriticalCssPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

const smp = new SpeedMeasurePlugin()

// https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/167
const configWithTimeMeasures = smp.wrap(merge(baseConfig, prodConfig))
configWithTimeMeasures.plugins.push(new MiniCssExtractPlugin())

module.exports = configWithTimeMeasures
