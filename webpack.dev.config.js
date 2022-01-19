/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
  // Environment mode
  mode: 'development',

  // Entry point of app
  entry: resolveAppPath('src'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/bundle.js',

    publicPath: '/',
  },

  devServer: {
    // Serve index.html as the base
    // contentBase: resolveAppPath('public'),

    // Enable compression
    compress: true,
    historyApiFallback: true,
    // Enable hot reloading
    hot: true,

    host,

    port: 3000,

    // Public path is root of content base
    // publicPath: '/',

    // proxy: {
    //   '/api/bypass-example': {
    //     bypass: (req, res) =>
    //       res.send({
    //         mssg: 'proxy server - Message came from bypass property in webpack',
    //       }),
    //   },
    // },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: resolveAppPath('src'),
        loader: 'babel-loader',
        options: {
          presets: [
            // Preset includes JSX, TypeScript, and some ESnext features
            require.resolve('babel-preset-react-app'),
          ],
        },
      },
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
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      layouts: resolveAppPath('src/layouts/'),
      components: resolveAppPath('src/components/'),
    },
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('public/index.html'),
    }),
    new ESLintPlugin(),
  ],
};
