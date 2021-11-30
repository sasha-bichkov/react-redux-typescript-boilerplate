const HtmlWebpackPlugin = require('html-webpack-plugin')
const CriticalCssPlugin = require('critical-css-webpack-plugin')

const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'),
  mode: 'development',
  entry: {
    app: path.resolve('app', 'App.tsx'),
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@Root': path.resolve('app'),
      '@Modules': path.resolve('app', 'modules'),
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
    new CriticalCssPlugin()
  ]
}
