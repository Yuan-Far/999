/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('bug', {
        bug_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true
        },
        create_time: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {tableName: 'bug'});
};
