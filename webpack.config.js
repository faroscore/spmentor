const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: {
        bundle: ["webpack-dev-server/client?", "./scripts/main.jsx"],
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV === "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === "development" ? "source-maps" : false,

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader?presets[]=es2015"
        }, {
            test: /\.jsx$/,
            loader: "babel-loader",
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.jade$/,
            loader: "jade"
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: "file?name=[name].[ext]"
        }]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), // Не собирать проект при ошибках
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV) // Положить в переменную значение
        }),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true
        })
    ]
};
