var path = require('path');

module.exports = {
  entry: './index2.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
};