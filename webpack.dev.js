const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "images/[name].[hash][ext]"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'postcss-loader',
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        })
    ]
})