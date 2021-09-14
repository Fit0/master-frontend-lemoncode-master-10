const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname,"src"),
    resolve: {
        extensions: [".js",".ts",".tsx"],
        alias:{
            common: path.resolve(__dirname, "src/common"),
            utils:path.resolve(__dirname, "src/utils"),
        },
    },
    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },                    
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
     
        new CleanWebpackPlugin(),
    ], 
};