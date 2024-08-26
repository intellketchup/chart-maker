const path = require('path');

module.exports = {
  entry: './src/index.ts', // Cambia a .ts si estás usando TypeScript
  output: {
    filename: 'chart-maker.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Añade .ts para que Webpack reconozca archivos TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Asegúrate de que ts-loader está instalado
        exclude: /node_modules/,
      },
    ],
  },
};
