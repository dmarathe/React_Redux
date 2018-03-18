var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    path: './static',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/vendors/phaser.min.js' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
