var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /.ts$/, loader: 'awesome-typescript-loader' }
  ]
}
};