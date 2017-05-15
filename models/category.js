const db = require('../config/db.js'),
    categoryModel = '../schema/category.js',
    articleModel = '../schema/article.js',
    middleModel = '../schema/middle.js'
const Sequelize = require('sequelize')

const projectDb = db.Connect;

const Category = projectDb.import(categoryModel);
const Article = projectDb.import(articleModel);
const Middle = projectDb.import(middleModel);

Article.belongsToMany(Category, {
    through: {
        model: Middle,
        unique: false
    },
    foreignKey: 'category_id',
    constraints: false
});
Category.belongsToMany(Article, {
    through: {
        model: Middle,
        unique: false
    },
    foreignKey: 'article_id'
});
const getArticleCategory = function* (category_id){
    const articleCategory = yield Middle.findAll({
        'where':{
            'category_id':category_id
        }
    })
    return articleCategory
}
const getCategoryById = function* (category_id) {
    const categoryIdInfo = yield Category.findAll({
        'where': {
            'category_id': category_id
        }
    })
    return categoryIdInfo
}
const getCategory = function* () {
    const category = yield Category.findAll({
        'order': [
            ['create_time', 'DESC']
        ],
        attributes: ['category_id', 'pic', 'title', 'create_time']
    })
    return category
}
const createCategory = function* (data) {
    const category = yield Category.create({
        'pic': data.pic || 'http://localhost:3000/img/ico.png',
        'title': data.title,
        'create_time': parseInt(new Date().getTime()/1000, 10),
        'user_id': data.user_id
    })
    return true
}
const editCategory = function* (id, data) {
    const category = yield Category.update(
    {
        'pic': data.pic,
        'title': data.title,
        'modify_time': parseInt(new Date().getTime()/1000, 10),
        'user_id': data.user_id
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
const getCategoryByUser = function* (user_id){
    const categoryUser = yield Category.findAll({
        'order': [
            ['create_time', 'DESC']
        ],
        'where': {
            'user_id': user_id
        }
    })
    return categoryUser
}
module.exports = {
    getArticleCategory,
    getCategory,
    getCategoryById,
    createCategory,
    editCategory,
    delCategory,
    getCategoryByUser
}   