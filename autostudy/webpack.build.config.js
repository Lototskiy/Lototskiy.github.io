const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'	
}
const buildWebpackConfig = merge(baseWebpackConfig, {
		mode: 'production',
		module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: 'src/assets/js/postcss.config.js'} }
					},
					'sass-loader',
								{
				loader: 'sass-resources-loader',
				options: {
            // Provide path to the file with resources
            resources: [
            'src/assets/css/fonts.scss',
            'src/assets/css/vars.scss'
            ]
        }
    }
				]

			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: './postcss.config.js'} }
					},
				]

			},
	         {
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}images/`,
					publicPath: "../images/"
				}
			},
	        {
                test: /\.(woff|ttf|eot|otf)$/,
                loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `${PATHS.assets}fonts/`,
                        publicPath: "../fonts/"
                    }
            }
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
    		filename: 'assets/css/[name].css',
    	}),
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig)
})

