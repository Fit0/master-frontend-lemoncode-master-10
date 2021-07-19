const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "production",
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentHashPrefix: "my-custom-hast", //optional
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  optimization:{
    runtimeChunk: 'single',
    splitChunks:{
      cacheGroups:{
        vendor:{
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new DotEnv({
      path: "./prod.env",
    }),
  ],
});