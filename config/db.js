const Sequelize = require('sequelize')

const Connect = new Sequelize('mysql://root:far0000@localhost/angry_api', {
    define: {
        timestamps: false
    }
})
// const MongoConnect = new Sequelize('mongodb://localhost:27017/angry_api')
module.exports = {
    Connect
    // MongoConnect
}
