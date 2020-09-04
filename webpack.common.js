"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack", "url-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      sass: path.resolve(__dirname, "src", "sass"),
      assets: path.resolve(__dirname, "src", "assets"),
      components: path.resolve(__dirname, "src", "components")
    },
    extensions: [".scss", ".css", ".js", ".jsx", ".svg", ".png"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/favicon-32x32.png"
    })
  ]
};
