/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collection_article', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'article',
        key: 'article_id'
      }
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'collection_article'
  });
};
