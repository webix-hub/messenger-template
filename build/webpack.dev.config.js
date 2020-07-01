const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: "development",

	devtool: "cheap-module-eval-source-map",

	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		port: 8080,
		overlay: {
			warnings: false,
			errors: true
		}
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|libs)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						["@babel/preset-env", {
							modules: false,
							loose: true,
							targets: {
								esmodules: true
							}
						}]
					],
					plugins: [
						"@babel/plugin-proposal-object-rest-spread",
						"@babel/plugin-syntax-dynamic-import"
					]
				}
			}
		}]
	},

	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: "[file].map"
		})
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig);
});
