const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "dist/bundle.js",
		library: '',
		libraryTarget: 'commonjs'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: glob.sync('./node_modules').map((d) => path.join(__dirname, d)),
						},
					},
				],
			}
		]
	}
};