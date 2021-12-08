const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: {
    app: path.resolve('app', 'App.tsx'),
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@Root': path.resolve('app'),
      '@Pages': path.resolve('app', 'pages'),
      '@Modules': path.resolve('app', 'modules'),
      '@Components': path.resolve('app', 'components'),
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
  ]
}
