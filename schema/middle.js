/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('middle', {
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'article',
        key: 'article_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    }
  }, {
    tableName: 'middle'
  });
};
