const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const baseConfig = require('./base.js')

const devConfig = {
  mode: 'development',
  entry: {
    app: path.resolve('app', 'App.tsx'),
    // vendor: path.resolve('tmp', 'cache', 'vendor-manifest.json')
  },
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
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
      }], // it's recommended to use style-loader for development since it works faster
    }]
  },
  plugins: [
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: path.resolve('tmp', 'cache', 'vendor-manifest.json')
    // }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['app'],
      filename: path.resolve('public', 'index.html')
    }),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   chunks: ['vendor'],
    //   filename: path.resolve('public', 'index.html'),
    // })
  ]
}

const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap(merge(baseConfig, devConfig))
