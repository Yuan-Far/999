const user = require('../controller/user.js');
const router = require('koa-router')();

user.auth(router) // 用user的auth方法引入router

module.exports = router; 
