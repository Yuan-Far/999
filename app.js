const app = require('koa')(),
    koa = require('koa-router')(),
    logger = require('koa-logger'),
    json = require('koa-json'),
    views = require('koa-views'),
    onerror = require('koa-onerror'),
    api = require('./routes/api.js'),
    jwt = require('koa-jwt');

const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');

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
// app.use(function *(next){  //  如果JWT验证失败，返回验证失败信息
//     try {
//         yield next;
//     } catch (err) {
//     if (401 == err.status) {
//         this.status = 401;
//         this.body = {
//             success: false,
//             token: null,
//             info: 'Protected resource, use Authorization header to get access'
//         };
//     } else {
//         throw err;
//         }
//     }
// });
app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
koa.use('/users', users.routes(), users.allowedMethods());
koa.use('/auth', auth.routes(), users.allowedMethods());

koa.use('/api', api.routes(), users.allowedMethods())

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx) {
    logger.error('server error', err, ctx);
});

module.exports = app;
