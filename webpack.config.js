// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'chart-maker.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ChartMaker',
    libraryTarget: 'umd',
    globalObject: 'this'
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
  externals: {
    'chart.js': 'Chart',  // Excluir Chart.js del bundle
    'hammerjs': 'Hammer' // Excluir hammer.js del bundle
  }
};
