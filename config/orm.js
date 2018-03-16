const connection = require("../config/connection.js");


const orm = {
	newUser: function(tableInput, name, password, gender, email, zip, cb) {
		connection.query(
			"INSERT INTO ?? (name, password, gender, email, zip) VALUES (?, ?, ?, ?, ?)", 
			[tableInput, name, password, gender, email, zip],
			function(err, data) {
				if (err) {throw err};
				cb(data);
			})
	}
}

module.exports = orm;