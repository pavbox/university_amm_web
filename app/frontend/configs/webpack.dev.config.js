const path = require('path');
const merge = require('webpack-merge');
const common = require('./../webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, './../dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './../dist',
  },
});
