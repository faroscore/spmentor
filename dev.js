var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);

var opn = require("opn");

var server = new webpackDevServer(compiler, {
    stats: { colors: true },
    // publicPath: "/public"
    historyApiFallback:{
    	index: "/public/index.html"
    }
});
opn("http://localhost:8000");
server.listen(8000);
