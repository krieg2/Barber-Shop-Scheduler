/ *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// sets up connection

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	console.log("using JAWSDB");
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "BarberShop_db"
	})

	console.log("using mysql locally")

}

connection.connect(function (err) {
	if (err) {
		console.error("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);

});

// Export connection

module.exports = connection;
