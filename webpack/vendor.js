const path = require('path')
const webpack = require('webpack')

const vendorConfig = {
  mode: 'development',
  entry: {
    vendor: [
      'react',
      'redux'
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
