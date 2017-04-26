var webpack = require('webpack')
var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: ['./app/src/client/index.js'],
  output: {
    path: './app/build',
    filename: 'bundle.js'
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ] : [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
