var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var webpackConfig = require('../webpack/webpack.dev');

var index = require('./routes/index');

var notFound = require('./routes/notfound');

var port = 8080;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Multiple Static Folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, './uploads/logos')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cookie Parser MW
app.use(cookieParser());

var compiler = webpack(webpackConfig);

// webpack dev middleware
app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

// webpack hot module reloading middleware
app.use(webpackHotMiddleWare(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

app.use('/*', index);
app.use('/love', index);
/*app.use('/!*', notFound);*/


app.listen(port, function(){
    console.log('Server started on port '+port);
});
