const mysql = require("mysql");


const connection = mysql.createConnection({
	port: 8889,
	host: "localhost",
	user: "root",
	password: "root",
	database: "weather_style_db"
})

connection.connect(function(err) {
	if (err) {
		console.log("error connecting " + err.stack);
		return;
	}

	console.log("connected to id " + connection.threadId)
})

module.exports = connection;