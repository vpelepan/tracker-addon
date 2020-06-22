const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'rivraddon.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',
  devServer: {
		contentBase: path.join(__dirname, './')
	},
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
	}
};
