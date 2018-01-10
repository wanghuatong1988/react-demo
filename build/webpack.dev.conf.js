
const path = require('path'),
      webpack = require('webpack'),
      utils = require('./utils'),
      config = require('./config'),
      merge = require('webpack-merge'),
      baseWebpackConfig = require('./webpack.base.conf'),
      htmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig,{
	entry: {},
	devtool: 'inline-source-map',
	output: {
		path: config.build.outputPath,
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
    rules:[]
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		inline: true
	}
})

const entries = utils.getEntries();

Object.keys(entries).forEach(function(name) {

    webpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(entries[name]);
    // 生成htmlWebpackPlugin
    const plugin = new htmlWebpackPlugin({
      filename: name + '.html',
      template: path.join(__dirname, 'views/'+ name +'/index.html'),
      inject: 'true',
      chunks: ['common', name]
    });

    webpackConfig.plugins.push(plugin);
})


module.exports = webpackConfig;

