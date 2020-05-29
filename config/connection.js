
var mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : "burgers_db",
    multipleStatements: true
  });


module.exports = connection;
