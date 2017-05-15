const category = require('../models/category.js');
const jwt = require('jsonwebtoken');

const getArticleList = function* () {
    const categoryId = this.params.category_id
    try {
        const result = yield category.getArticleCategory(categoryId)
        this.body = {
            'code': 1,
            'msg': 'success',
            'result': result.length
        }
    }catch (e) {
        this.body = {
            code: -1,
            msg: e.message
        }
    }    
}
const getCategoryInfo = function* () {
    const result = yield category.getCategory()
    this.body = result
}
const getCategoryMsg = function* (category_id) {
    const sort_id = this.params.category_id
    try {
        const result = yield category.getCategoryById(sort_id)
        this.body = result
    }catch (e) {
        this.body = {
            code: -1,
            msg: e.message
        }
    }  
    
}
const postCategoryInfo = function* () {
    const data = this.request.body
    try{
        const result = yield category.createCategory(data)
        this.body = {
            code: 1,
            msg: 'Category created'
        }
    }catch(e){
        this.body = {
            code: -1,
            msg: e.message
        }
    }
    
}
const editCategoryInfo = function* () {
    const category_id = this.params.id
    const data = this.request.body
    const result = yield category.editCategory(category_id, data)  
    
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Category is modified"
        }
    }
}
const delCategoryInfo = function* () {
    const category_id = this.params.id
    const result = yield category.delCategory(category_id)
    
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Category is deleted"
        }
    }
}
const getCategoryUserList = function* (){
    const userId = this.params.user_id
    try{
        const result = yield category.getCategoryByUser(userId)
        this.body = {
            'code': 1,
            'msg': 'Category finded',
            'data': result
        }
    }catch(e) {
        this.body = {
            'code': -1,
            'msg': e.message
        }
    }
}
module.exports = {
    getArticleList,
    getCategoryInfo,
    getCategoryMsg,
    postCategoryInfo,
    editCategoryInfo,
    delCategoryInfo,
    getCategoryUserList
}
