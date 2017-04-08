const user = require('../models/user.js')
const jwt = require('jsonwebtoken')

const getUserInfo = function * () {
    const id = this.params.id
    const result = yield user.getUserById(id)
    this.body = result;
}
const postUserAuth = function * () {
    const data = this.request.body
    const userInfo = yield user.getUserName(data.username)
    if (userInfo != null) {
        if (userInfo.password != data.password) {
            this.body = {
                code: -1,
                msg: 'Password Error'
            }
        } else {
            let userToken = {
                name: userInfo.username,
                id: userInfo.user_id
            }
            const secret = 'Yuan-Yang-Code'
            const token = jwt.sign(userToken, secret, { expiresIn: 60*10 })
            
            this.body = {
                code: 1,
                token: token
            }
        }
    } else {
        this.body = {
            code: -2,
            msg: 'Not User'
        }
    }
}

module.exports = {
    auth: (router) => {
        router.get('/user/:id', getUserInfo);
        router.post('/user', postUserAuth);
    }
}
