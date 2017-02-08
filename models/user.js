const db = require('../config/db.js'),
    userModel = '../schema/user.js';
//import mysql
const projectDb = db.Connect;

const User = projectDb.import(userModel);

const getUserById = function* (id) {
    const userInfo = yield User.findOne({
        where: {
            user_id: id
        }
    });
    return userInfo;
}

module.exports = {
    getUserById
}
