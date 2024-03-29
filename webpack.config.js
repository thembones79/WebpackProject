var webpack = require("webpack");
var path = require("path");
var HtlmWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  "react",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "faker",
  "react-input-range",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtlmWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
