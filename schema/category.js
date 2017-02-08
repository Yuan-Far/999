/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('category', {
        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
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
    }, {tableName: 'category'});
};
