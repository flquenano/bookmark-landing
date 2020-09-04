const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "#inline-source-map",
  devServer: {
    port: 3000,
    publicPath: "/",
    writeToDisk: true,
    hot: true,
    open: true,
    hotOnly: true,
    historyApiFallback: true,
    overlay: true
  }
});
