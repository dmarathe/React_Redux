var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    path: './static',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' }
    ])
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
