/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'production',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moules/,
        use: { loader: 'babel-loader' },
        include: resolveAppPath('src'),
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/, use: { loader: 'html-loader' } },
      {
        test: /\.(svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  devtool: false,
  resolve: {
    alias: {
      layouts: resolveAppPath('src/layouts/'),
      components: resolveAppPath('src/components/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('public/index.html'),
    }),
  ],
};
