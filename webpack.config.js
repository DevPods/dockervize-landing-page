const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/style.css' }],
    }),
  ],
  devServer: {
    // Required for Docker to work with dev server
    host: '0.0.0.0',
    //host: localhost,
    port: 8080,
    //enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      //match the output 'publicPath'
      publicPath: '/',
    },

    headers: { 'Access-Control-Allow-Origin': '*' },
    // proxy is required in order to make api calls to express server while using hot-reload webpack server
    // routes api fetch requests from localhost:8080/api/* (webpack dev server) to localhost:3000/api/* (where our Express server is running)
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  devtool: 'eval-source-map',
};
