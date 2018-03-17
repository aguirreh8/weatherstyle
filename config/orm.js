// Require database connection
const connection = require("../config/connection.js");

// Create ORM object
const orm = {
	// Use mySQL query to create new field
	newUser: function(tableInput, name, password, gender, email, zip, cb) {
		connection.query(
			"INSERT INTO ?? (name, password, gender, email, zip) VALUES (?, ?, ?, ?, ?)", 
			[tableInput, name, password, gender, email, zip],
			function(err, data) {
				if (err) {throw err};
				cb(data); // use callback to send back data
			})
	}
}

// Export object
module.exports = orm;