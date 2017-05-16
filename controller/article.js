const article = require('../models/article.js');

const getArticleInfo = function* () {
    const result = yield article.getArticle()
    this.body = result
}
const getArticleMsg = function* (id) {
    const sort_id = this.params.id
    const result = yield article.getArticleById(sort_id)
    this.body = result
}
const getArticleCategory = function* (category_id){
    const categoryId = this.params.category_id
    try {
        const result = yield article.getArticleByCategory(categoryId)
        this.body = {
            'code': 1,
            'msg': 'Success',
            'result': result
        }
    }catch(e){
        this.body = {
            'code': -1,
            'msg':e.message
        }
    }
    
}
const postArticleInfo = function* () {
    const data = this.request.body
    const result = yield article.createArticle(data)
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Article is created"
        }
    }
}
const editArticleInfo = function* () {
    const article_id = this.params.id
    const data = this.request.body
    const result = yield article.editCategory(article_id, data)  
    
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Article is modified"
        }
    }
}
const delArticleInfo = function* () {
    const article_id = this.params.id
    const result = yield article.delArticle(article_id)
    
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Article is deleted"
        }
    }
}
const getArticleByUserId = function* () {
    const userId = this.params.user_id
    try {
        const result = yield article.getArticleByUser(userId)
        this.body = {
            'code': 1,
            'msg': 'Success',
            'result': result
        }
    }catch(e){
        this.body = {
            'code': -1,
            'msg':e.message
        }
    }
}
module.exports = {
    getArticleInfo,
    getArticleMsg,
    postArticleInfo,
    editArticleInfo,
    delArticleInfo,
    getArticleCategory,
    getArticleByUserId
}
