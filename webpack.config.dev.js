var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/bessed-drest'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!sass-loader'
      },
      // images
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, 'client'),
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  }
};
