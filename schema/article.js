/* jshint indent: 2 */

/**
 * [文章表信息]
 * @param  {[type]} sequelize [使用面向对象的方式操作表]
 * @param  {[type]} DataTypes [表字段]
 * @return {[type]}           [description]
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('article', {
        article_id: {
            type: DataTypes.INTEGER(11), //字段类型
            allowNull: false, //是否为空
            primaryKey: true //是否主键
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true
        },
        create_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        modify_time: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {tableName: 'article'});
};
