import merge from 'webpack-merge';
import common from './webpack.common.babel';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 9001,
  },
});
