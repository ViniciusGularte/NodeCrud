const mysql = require('mysql')
const pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'teste'
});
exports.pool = pool;
