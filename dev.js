var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
    stats: { colors: true },
    publicPath: "/public"
});
server.listen(8000);
