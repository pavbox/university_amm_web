const path = require('path');
const merge = require('webpack-merge');
const common = require('./../webpack.common.config.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, './../public'),
    filename: '[name].bundle.[hash].js',
  },
  devServer: {
    contentBase: './../public',
  },
});
