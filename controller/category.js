const category = require('../models/category.js');
const jwt = require('jsonwebtoken');

const getCategoryInfo = function* () {
    const result = yield category.getCategory()
    this.body = result
}
const getCategoryMsg = function* (id) {
    const sort_id = this.params.id
    const result = yield category.getCategoryById(sort_id)
    this.body = result
}
const postCategoryInfo = function* () {
    const data = this.request.body
    const result = yield category.createCategory(data)
    
    if(result !== null) { 
        this.body = {
            code: 1,
            msg: "Category is created"
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
module.exports = {
    getCategoryInfo,
    getCategoryMsg,
    postCategoryInfo,
    editCategoryInfo,
    delCategoryInfo
}
