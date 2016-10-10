/*eslint-disable no-var */

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: { 'src': 'D:\\BanhBao\\src\\js\\index.js'},

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/dist'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]--[local]',
          'sass?sourceMap'
        ],
        exclude: /node_modules/

      }
    ]
  },
resolve: { modulesDirectories: ['node_modules', 'src'], extension: ['', '.js', '.scss'] },
  // Expose __dirname to allow automatically setting basename.
  context: __dirname,
  node: {
    __dirname: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
