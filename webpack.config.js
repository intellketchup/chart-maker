const path = require('path');

module.exports = {
  entry: './src/index.ts', // Apunta a index.ts
  output: {
    filename: 'chart-maker.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ChartMaker',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
