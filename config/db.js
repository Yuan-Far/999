const Sequelize = require('sequelize')

const Connect = new Sequelize('mysql://root:far0000@localhost/angry_api', {
    define: {
        timestamps: false
    }
})
module.exports = {
    Connect
}
