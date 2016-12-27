const mysql = require("mysql2");
const config = require('../config.js');

const connection = mysql.createConnection({
    host: '172.20.0.31',
    user: 'root',
    password: 'far0000',
    database: 'angry_api'
});

connection.execute('SELECT * FROM `user`', function(err, results, fields) {
    console.log(results);
    console.log(fields);
});
