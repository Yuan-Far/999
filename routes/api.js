const category = require('../controller/category.js');
const article = require('../controller/article.js');
const collection = require('../controller/collection.js');
const upload = require('../controller/upload.js');
const router = require('koa-router')();

//Category->分类
router.get('/article_list/:category_id', category.getArticleList);
router.get('/category_info', category.getCategoryInfo);
router.get('/category_msg/:category_id', category.getCategoryMsg);
router.get('/category_user/:user_id', category.getCategoryUserList);
router.post('/create_category', category.postCategoryInfo);
router.put('/edit_category/:id', category.editCategoryInfo);
router.delete('/del_category/:id', category.delCategoryInfo);


//Article->文章
router.get('/article_info', article.getArticleInfo);
router.get('/article_msg/:id', article.getArticleMsg);
router.get('/article_category/:category_id', article.getArticleCategory);
router.post('/create_article', article.postArticleInfo);
router.put('/edit_article/:id', article.editArticleInfo);
router.delete('/del_article/:id', article.delArticleInfo);

//Collection->收藏
router.post('/collection_category', collection.collectionCategoryMsg)
router.delete('/cancel_category/:user_id/:category_id', collection.cancelCollectionCategoryMsg)
router.post('/collection_article', collection.collectionArticleMsg)
router.delete('/cancel_article/:user_id/:category_id', collection.cancelCollectionArticleMsg)

//Upload-> 上传
router.post('/upload_img', upload.uploadFile)

module.exports = router; // 导出router规则
