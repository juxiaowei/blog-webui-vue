var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// eval-source-map is faster for development
config.devtool = 'source-map'

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/build/'
config.plugins = (config.plugins || []).push(
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: './src/index.html'
  })
)

module.exports = config