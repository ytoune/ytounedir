
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname),
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			template: './src/index.html',
		}),
	],
}
