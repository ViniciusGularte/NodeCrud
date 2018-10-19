
//teste de construtor
var select = "SELECT ?? FROM ?? 0";
var update = "UPDATE ?? SET";
var delete = "DELETE FROM ??";
var create = "INSERT INTO ?? () VALUES ()";
var set = "?? = ?,";
var and = "AND ?? = ?";
var where = "WHERE ?? = ?";
var orderByAsc = "ORDER BY ? Asc";
var orderByDesc = "ORDER BY ? Desc";
var limit = "LIMIT ?";

var sql =;
var inserts = ['users', 'id', userId];
sql = mysql.format(sql, inserts);
