// Require ORM object functions
const orm = require("../config/orm.js");

//Create styles constructor
const styles = {
	// Pass information to ORM to INSERT data
	newUser: function(name, password, gender, email, zip, cb) {
		orm.newUser("user", name, password, gender, email, zip, function(res) {
				cb(res); // Use callback to send data
			})
	},

	getWeather: function(cb) {
		orm.getWeather(function(res) {
			cb(res);
		})
	},

	getOutfits: function(gender, temp, occasion, cb) {
		orm.getOutfits("outfits", gender, temp, occasion, function(res) {
			cb(res);
		})
	}
}

// Exports
module.exports = styles;