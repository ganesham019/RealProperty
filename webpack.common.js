const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html/i,
                use: [{
                    loader: "html-loader",
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
            inject: "body",
        })
    ]
}