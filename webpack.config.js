const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" //creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // complies Sass to CSS
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
