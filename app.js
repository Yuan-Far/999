var app = require('koa')(),
    koa = require('koa-router')(),
    logger = require('koa-logger'),
    json = require('koa-json'),
    views = require('koa-views'),
    onerror = require('koa-onerror');

var index = require('./routes/index');
var users = require('./routes/users');

var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'far0000',
    database: 'angry_api',
    port: '3306'
});

connection.execute('SELECT * FROM `user`', function(err, results, fields) {
    console.log(err);
    console.log(results);
    console.log(fields);
});
// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'jade'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
koa.use('/users', users.routes(), users.allowedMethods());

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx) {
    logger.error('server error', err, ctx);
});

module.exports = app;
