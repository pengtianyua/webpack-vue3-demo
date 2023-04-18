const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		port: 8080,
		hot: true,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'postcss-loader',
				]
			},
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
		]
	}
})
