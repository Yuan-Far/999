const db = require('../config/db.js'),
    userModel = '../schema/user.js';
//import mysql
const projectDb = db.Connect;

const User = projectDb.import(userModel);

const getUserById = function* (id) {
    const userInfo = yield User.findOne({
        'where': {
            'user_id': id
        }
    });
    return userInfo;
}
const editUser = function* (user_id, data) {
    const userInfo = yield User.update(
    {
        'pic': data.pic,
        'email': data.email,
        'password': data.password,
        'summary': data.summary,
        'addr': data.addr,
        'username': data.username,
        'modify_time': parseInt(new Date().getTime()/1000, 10)
    },{
        'where':{
            'user_id': user_id
        }
    })
    return userInfo;
}
//获取用户名
const getUserName = function* (name){
    const userInfo = yield User.findOne({
        'where': {
            'username': name
        }

    });
    return userInfo;
}
//新建用户
const createUser = function* (data){
    const userInfo = yield User.create({
        'username': data.username,
        'password': data.password,
        'create_time': parseInt(new Date().getTime()/1000, 10)
    })
    return userInfo;
}
module.exports = {
    getUserById,
    getUserName,
    createUser,
    editUser
}
