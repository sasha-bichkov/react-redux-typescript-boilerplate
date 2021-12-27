const path = require('path')
const webpack = require('webpack')

const vendorConfig = {
  mode: 'development',
  entry: {
    vendor: [
      'axios',
      'immer',
      'react',
      'history',
      'react-dom',
      'classnames',
      'redux-saga',
      'react-redux',
      'react-router',
      '@reduxjs/toolkit',
      'connected-react-router'
    ]
  },
  output: {
    filename: 'vendor.bundle.js',
    path: path.resolve('tmp', 'cache'),
    library: 'vendor_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor_lib',
      path: path.resolve('tmp', 'cache', 'vendor-manifest.json')
    })
  ]
}

module.exports = vendorConfig
