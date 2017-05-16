const collection = require('../models/collection.js');

const collectionCategoryMsg = function* () {
    const data = this.request.body
    const result = yield collection.collectionCategoryById(data)  

    // console.log(result)
    if(result !== null ){
        this.body = {
            code: 1,
            msg: 'Collection Success' 
        }
    }
}
const cancelCollectionCategoryMsg = function* () {
    const userId = this.params.user_id
    const categoryId = this.params.category_id
    const result = yield collection.cancelCollectionCategoryById(userId, categoryId)     
    // console.log(result)
    if(result !== null ){
        this.body = {
            code: 1,
            msg: 'Collection Remove Success' 
        }

    }
}
const collectionArticleMsg = function* () {
    const data = this.request.body
    try {
        const result = yield collection.collectionArticleById(data)  
        this.body = {
            'code': 1,
            'msg': 'Article Success' 
        }
    }catch(e) {
        this.body = {
            'code': -1,
            'msg': e.message
        }
    }
}
const cancelCollectionArticleMsg = function* () {
    const userId = this.params.user_id
    const articleId = this.params.article_id
    const result = yield collection.cancelCollectionArticleById(userId, articleId)     
    // console.log(result)
    if(result !== null ){
        this.body = {
            code: 1,
            msg: 'Article Remove Success' 
        }

    }
}
module.exports = {
    collectionCategoryMsg,
    cancelCollectionCategoryMsg,
    collectionArticleMsg,
    cancelCollectionArticleMsg
}