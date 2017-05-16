const db = require('../config/db.js'),
    categoryModel = '../schema/category.js',
    userModel = '../schema/user.js',
    articleModel = '../schema/article.js',
    collectionCategoryModel = '../schema/collection_category.js',
    collectionArticleModel = '../schema/collection_article.js',
    middleModel = '../schema/middle.js';

const projectDb = db.Connect;

const Category = projectDb.import(categoryModel);
const User = projectDb.import(userModel);
const Article = projectDb.import(articleModel);
const CollectionCategory = projectDb.import(collectionCategoryModel);
const CollectionArticle = projectDb.import(collectionArticleModel);
const Middle = projectDb.import(middleModel);

const collectionCategoryById = function* (data) {

    const collectionCategory = yield CollectionCategory.create({
        'user_id': data.user_id,
        'category_id': data.category_id,
        'status': 1  
    })
    return collectionCategory
}
const cancelCollectionCategoryById = function* (user_id, category_id) {
    const cancelCollectionCategory = yield CollectionCategory.destroy({
        'where': {
            'user_id': user_id,
            'category_id': category_id
        }
    })
    return true
}
const collectionArticleById = function* (data) {

    const collectionArticle = yield CollectionArticle.create({
        'user_id': data.user_id,
        'article_id': data.article_id,
        'status': 1  
    })
    return collectionArticle
}
const collectionArticleByUserId = function* (article_id) {

    const collectionArticleUser = yield CollectionArticle.findOne({
        'where':{
            'article_id': article_id
        }  
    })
    return collectionArticleUser
}
const cancelCollectionArticleById = function* (user_id, category_id) {
    const cancelArticleCategory = yield CollectionArticle.destroy({
        'where': {
            'user_id': user_id,
            'article_id': article_id
        }
    })
    return true
}

module.exports = {
    collectionCategoryById,
    cancelCollectionCategoryById,
    collectionArticleById,
    cancelCollectionArticleById,
    collectionArticleByUserId
}