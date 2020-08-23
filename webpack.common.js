"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: []
  },
  resolve: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/img/favicon-32x32.png"
    })
  ]
};
