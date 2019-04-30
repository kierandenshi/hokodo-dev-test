import { resolve } from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: resolve(__dirname, 'index.html'),
  filename: 'index.html',
});

const cleanPlugin = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: {
    app: resolve(__dirname, 'src', 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [cleanPlugin, htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve('node_modules'), resolve(__dirname, 'src')],
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
};
