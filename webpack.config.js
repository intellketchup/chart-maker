const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'chart-maker.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ChartMaker',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development'
};
