const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const RemovePlugin = require("remove-files-webpack-plugin");

const es5 = merge(baseWebpackConfig, {
	mode: "production",
	output: {
		path: `${baseWebpackConfig.externals.paths.dist}/es5/`
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
		new RemovePlugin({
			before: {
				include: [
					"dist"
				]
			}
		})
	]
});

const es6 = merge(baseWebpackConfig, {
	mode: "production",
	output: {
		path: `${baseWebpackConfig.externals.paths.dist}/es6/`
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
								node: 6.5
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
	}
});

const buildWebpackConfig = [es5, es6];

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});
