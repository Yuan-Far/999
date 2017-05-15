const jwt = require('jwt-decode');
const db = require('../config/db.js'),
    articleModel = '../schema/article.js',
    categoryModel = '../schema/category.js',
    middleModel = '../schema/middle.js'
const projectDb = db.Connect;

const Article = projectDb.import(articleModel);
const Category = projectDb.import(categoryModel);
const Middle = projectDb.import(middleModel); 

const getArticleById = function* (id) {
    const article = yield Article.findAll({
        where: {
            'article_id': id
        },
        attributes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time', 'user_id', 'category_id']
    })
    return article
}
const getArticle = function* () {
    const articleInfoList = yield Article.findAll({
        attributes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time', 'user_id', 'category_id']
        // include: Category
    })
    
    return articleInfoList
}
const getArticleByCategory = function* (category_id) {
    const articleByUser = yield Article.findAll({
        where: {
            'category_id': category_id
        },
        arrtibutes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time', 'user_id', 'category_id']
    })
    return articleByUser
}
const getArticleByUser = function* (id) {
    const articleByUser = yield Article.findAll({
        where: {
            'user_id': id
        },
        arrtibutes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time', 'user_id', 'category_id']
    })
    return article
}
const createArticle = function* (data) {
    const article = yield Article.create({
        'pic': data.pic || 'http://localhost:3000/img/ico.png',
        'title': data.title,
        'content': data.content,
        'author': data.author || 'Yuan',
        'create_time': parseInt(new Date().getTime()/1000, 10),
        'user_id': data.user_id,
        'category_id': data.category_id
    })
    return true
}
const editArticle = function* (id, data) {
    const article = yield Article.update(
    {
        'pic': data.pic,
        'title': data.title,
        'pic': data.pic,
        'content': data.content,
        'author': data.author,
        'modify_time': parseInt(new Date().getTime()/1000, 10),
        'category_id': data.category_id
    },
    {
        'where': {
            'article_id': id
        }
    })  
    return true
}
const delArticle = function* (id) {
    const article = yield Article.destroy(
    {
        'where': {
            'article_id': id
        }
    })
    return true
}
module.exports = {
    getArticle,
    getArticleById,
    createArticle,
    editArticle,
    delArticle,
    getArticleByUser,
    getArticleByCategory
}   