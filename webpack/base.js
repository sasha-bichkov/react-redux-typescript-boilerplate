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
      '@Images': path.resolve('public', 'images'),
      '@Modules': path.resolve('app', 'modules'),
      '@Components': path.resolve('app', 'components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'react-svg-loader',
          options: {
            jsx: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
  ]
}
