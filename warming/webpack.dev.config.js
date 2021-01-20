const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'
}
const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devServer: {
		port: 8081,
		hot: true,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					'sass-loader',

					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'src/assets/css/fonts.scss',
								'src/assets/css/vars.scss'
							]
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}images/`,
				}
			},
			{
				test: /\.(woff|ttf|eot|otf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}fonts/`,
				}
			}
		]
	},
	plugins: []
})

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})