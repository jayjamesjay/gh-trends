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
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public', to: './' }]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
