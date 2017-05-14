const db = require('../config/db.js'),
    articleModel = '../schema/article.js';

const projectDb = db.Connect;

const Article = projectDb.import(articleModel);

const getArticleById = function* (id) {
    const article = yield Article.findAll({
        where: {
            'article_id': id
        },
        attributes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time']
    })
    return article
}
const getArticle = function* () {
    const articleInfoList = yield Article.findAll({
        attributes: ['article_id', 'status', 'content', 'author', 'pic', 'title', 'create_time']
    })
    
    return articleInfoList
}

const createArticle = function* (data) {
    const article = yield Article.create({
        'pic': data.pic || '/public/img/ico.png',
        'title': data.title,
        'content': data.content,
        'author': data.author || 'Yuan',
        'create_time': parseInt(new Date().getTime()/1000, 10)
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
        'modify_time': parseInt(new Date().getTime()/1000, 10)
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
    delArticle
}   