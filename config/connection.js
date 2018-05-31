// Require mysql connection
const mysql = require("mysql");

// If deployed, used JAWSDB to connect to database
const connection = mysql.createConnection({
	port: 8889,
	host: "localhost",
	user: "root",
	password: "root",
	database: "weather_style_db"
})

// Connect to database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting " + err.stack);
		return;
	}

	console.log("connected to id " + connection.threadId)
})

// Export connection
module.exports = connection;