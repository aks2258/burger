var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDBURL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "burgers_db"
	});
};

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id: "+connection.threadId);
});

module.exports = connection;