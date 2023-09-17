const path = require('path');
const { config } = require('dotenv');
const webpack = require('webpack');

const dotenv = config({
  path: path.join(__dirname, '.env')
});

module.exports = {
  entry: './src/electron.ts',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
  ]
};
