const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b6ec23a696e55a',
    password: 'a98595dc',
    database: 'heroku_70b4e55703737ba',
    multipleStatements: true
  });
  
  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Base de datos conectada');
    }
  });
  
  module.exports = mysqlConnection;