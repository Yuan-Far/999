/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addr: {
            type: DataTypes.STRING,
            allowNull: true
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        create_time: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {tableName: 'user'});
};
