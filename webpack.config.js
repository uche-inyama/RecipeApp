const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


require('dotenv').config();
module.exports = {
	context: path.join(__dirname, 'src'),
	entry: ['whatwg-fetch', './index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			API_URL: JSON.stringify(process.env.API_URL)
		})
	]

};