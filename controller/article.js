const article = require('../models/article.js');

const getArticleInfo = function* () {
    const result = yield category.getArticle()
    this.body = result
}
const getArticleMsg = function* (id) {
    const sort_id = this.params.id
    const result = yield article.getArticleById(sort_id)
    this.body = result
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
module.exports = {
    getArticleInfo,
    getArticleMsg,
    postArticleInfo,
    editArticleInfo,
    delArticleInfo
}
