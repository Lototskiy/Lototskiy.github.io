const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss', '.css'],
		alias: {
			'img': path.join(__dirname, './src/assets/images'),
			'fonts': path.join(__dirname, './src/assets/fonts')
		}
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				query: {
					pretty: true
				}
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page.replace(/\.pug/,'.html')}`
		})),

		new CopyWebpackPlugin([{
			from: `${PATHS.src}/assets/images`,
			to: `${PATHS.assets}images`
		}]),
	]
};