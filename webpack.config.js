var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    javascript: './index.js',
    html: '../index.html'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },

  context: path.join(__dirname, 'src','js'),

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'react-hot-loader/webpack','babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss?$/,
      loaders: ['style', 'css', 'sass'],
      include: __dirname
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader : 'file-loader'
    },
    { test: /\.html$/, loader: 'file?name=[name].[ext]' }

    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  devServer: {
    historyApiFallback: true
  }

}
