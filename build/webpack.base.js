const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, '../'),
	entry: {
		main: './src/main.js'
	},
	output: {
		clean: true,
		path: path.resolve(__dirname, '../dist'),
		filename: "js/[name].[chunkhash:8].js"
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['*', '.js', '.json', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(jpe?g|png|gif|svg)/,
				type: "asset",
				generator: {
					filename: 'img/[name].[hash:8][ext][query]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024
					}
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			filename: "index.html",
			title: "Webpack App"
		})
	]
}
