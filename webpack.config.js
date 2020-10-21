
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".mjs", ".js", ".jsx", ".json", ".css"]
    },
    module: {
        rules: [
            {
				test: /\.js|\.jsx$/,
				loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
        ]
    },
    devServer: {
        contentBase: "./dist",
        writeToDisk: true,
        historyApiFallback: true,
        host: "127.0.0.1",
        port: 8084,
        compress: true,
        open: false
    },
    plugins: [
        new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				'**/*.js', 
                '**/*.map',
                '!*.html'
			],
		}),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ]
};