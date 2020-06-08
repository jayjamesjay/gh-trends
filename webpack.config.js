const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
    worker: './src/service-worker.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([{ from: './public', to: './' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
