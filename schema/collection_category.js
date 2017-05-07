/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collection_category', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
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
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'collection_category'
  });
};
