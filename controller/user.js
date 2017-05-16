const user = require('../models/user.js')
const jwt = require('jsonwebtoken')

const getUserInfo = function* () {
    const id = this.params.id
    const result = yield user.getUserById(id)
    this.body = result;
}
/**
 * [*postUserAuth login]
 * @yield {[type]} [description]
 */
const postUserAuth = function* () {
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

const editUserName = function* () {
    const user_id = this.params.user_id
    // console.log(this.params)
    const data = this.request.body
    try {
        const result = yield user.editUser( user_id, data)
        this.body = {
            code: 1,
            msg: "User is modified",
            result: result
        }
    }catch(e) {
        console.log(e)
        this.body = {
            'code': -1,
            'msg': e.message
        }
    }
}
const editUserEmail = function* () {
    const user_id = this.params.user_id
    // console.log(this.params)
    const data = this.request.body
    try {
        const result = yield user.editUser( user_id, data)
        this.body = {
            code: 1,
            msg: "User is modified",
            result: result
        }
    }catch(e) {
        console.log(e)
        this.body = {
            'code': -1,
            'msg': e.message
        }
    }
}
const editUserSummary = function* () {
    const user_id = this.params.user_id
    // console.log(this.params)
    const data = this.request.body
    try {
        const result = yield user.editUser( user_id, data)
        this.body = {
            code: 1,
            msg: "User is modified",
            result: result
        }
    }catch(e) {
        console.log(e)
        this.body = {
            'code': -1,
            'msg': e.message
        }
    }
}
const postUserCreate = function* (){
    const data = this.request.body
    const result = yield user.createUser(data)
    if(result != null){
        let userToken = {
            name: result.username,
            id: result.user_id
        }
        const secret = 'Yuan-Yang-Code'
        const token = jwt.sign(userToken, secret, {expiresIn: 60*10 })
        this.body = {
            code: 1,
            token: token,
            msg: "user is created"
        }
    }    
}
/*const postLogout = function* (){
    sessionStorage.setItem('Yuan-Token', null)
    this.body = {
        code: 1,
        msg: 'Logout'
    }
}*/
module.exports = {
    auth: (router) => {
        router.get('/user/:id', getUserInfo);
        router.post('/user', postUserAuth);
        router.post('/reg', postUserCreate);
        router.put('/edit_user/:user_id', editUserName);
        router.put('/edit_email/:user_id', editUserEmail);
        router.put('/edit_summary/:user_id', editUserSummary);
        //router.post('/logout', postLogout);
    }
}
