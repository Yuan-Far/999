const db = require('../config/db.js'),
    categoryModel = '../schema/category.js',
    articleModel = '../schema/article.js',
    middleModel = '../schema/middle.js'
const Sequelize = require('sequelize')

const projectDb = db.Connect;

const Category = projectDb.import(categoryModel);
const Article = projectDb.import(articleModel);
const Middle = projectDb.import(middleModel);

const getArticleCategory = function* (category_id){
    const articleCategory = yield Middle.findAll({
       'include': [
            {
                'model': Article,
                'where': {
                    'article_id': Sequelize.col('middle.article_id')
                }
            }
        ],
        'where': {
            'category_id': category_id
        } 
    })
    return articleCategory
}
const getCategoryById = function* (id) {
    const category = yield Category.findAll({
        where: {
            'category_id': id
        },
        attributes: ['category_id', 'pic', 'title', 'create_time']
    })
    return category
}
const getCategory = function* () {
    const category = yield Category.findAll({
        attributes: ['category_id', 'pic', 'title', 'create_time']
    })
    return category
}
const createCategory = function* (data) {
    const category = yield Category.create({
        'pic': data.pic || '/public/img/ico.png',
        'title': data.title,
        'create_time': parseInt(new Date().getTime()/1000, 10)
    })
    return true
}
const editCategory = function* (id, data) {
    const category = yield Category.update(
    {
        'pic': data.pic,
        'title': data.title,
        'modify_time': parseInt(new Date().getTime()/1000, 10)
    },
    {
        'where': {
            'category_id': id
        }
    })  
    return true
}
const delCategory = function* (id) {
    const category = yield Category.destroy(
    {
        'where': {
            'category_id': id
        }
    })
    return true
}
module.exports = {
    getArticleCategory,
    getCategory,
    getCategoryById,
    createCategory,
    editCategory,
    delCategory
}   