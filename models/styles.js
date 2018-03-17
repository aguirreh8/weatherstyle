// Require ORM object functions
const orm = require("../config/orm.js");

//Create styles constructor
const styles = {
	// Pass information to ORM to INSERT data
	newUser: function(name, password, gender, email, zip, cb) {
		orm.newUser("user", name, password, gender, email, zip, function(res) {
				cb(res); // Use callback to send data
			})
	}
}

// Exports
module.exports = styles;