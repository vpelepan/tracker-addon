const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'rivraddon.js',
    path: path.resolve(__dirname, './build')
  },
  devtool: 'none',
  module: {
		rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
		],
	},
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
