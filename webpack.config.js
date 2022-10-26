const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/pages/main/main.js',
  entry: {
    main: './src/pages/main/main.js',
    donate: './src/pages/donate/donate.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[hash][ext]' /* change derictory and name*/
  },
  mode: 'production',
  module: {
    rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({ /*title: 'Base',*/ template: './src/pages/main/main.html', filename: 'main.html', chunks: ["main"], minify: false}),
    new HtmlWebpackPlugin({ /*title: 'Base',*/ template: './src/pages/donate/donate.html', filename: 'donate.html', chunks: ["donate"], minify: false}),
    new MiniCssExtractPlugin({ /*filename: '[name].[contenthash].css'*/ })
  ],
  devServer: {
    open: true,
    // hot: true,
    port: 8080,
    static: './dist'
    // contentBase: path.join(__dirname, 'public'), if there's some public
  },
};