const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/components/index.js",
    worker: "./src/service-worker.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: "./src/manifest.json", to: "./" },
      { from: "./src/assets", to: "./assets" },
      { from: "./src/index.html", to: "./" }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
