const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const DotEnv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8081,
    stats: "errors-only",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                localIdentHashPrefix: "my-custom-hast", //optional
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins:[
      new DotEnv ({
        path: "./dev.env",
      })
  ]
});
