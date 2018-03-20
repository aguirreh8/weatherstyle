// Require database connection
const connection = require("../config/connection.js");
const weather = require("weather-js");

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
	},

	getWeather: function(cb) {
		weather.find({ search: "07002", degreeType: "F" }, function(err, result) {
		  if (err) {
		    console.log(err);
		  }
		  cb(result)
		});
	},

	getOutfits: function(tableInput, gender, temp, occasion, cb) {
		connection.query(
			"SELECT outfit, photo FROM ?? WHERE (gender = ?) AND (?? = true) AND (occasion = ?)",
			[tableInput, gender, temp, occasion],
			function(err, data) {
				if (err) {throw err};
				cb(data);
			}
		)
	}
}

// Export object
module.exports = orm;