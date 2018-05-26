module.exports = {
	entry: ['./src/index.js', './style/index.scss'],
	output: {
		path: __dirname,
		filename: "dist/bundle.js",
		library: '',
		libraryTarget: 'umd' // commonjs
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			}
		]
	}
};