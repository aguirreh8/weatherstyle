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
	// Pass zipcode to get weather data
	getWeather: function(zip, cb) {
		orm.getWeather(zip, function(res) {
			cb(res);
		})
	},
	// Get outfits from single table
	getOutfits: function(gender, temp, occasion, cb) {
		orm.getOutfits("outfits", gender, temp, occasion, function(res) {
			cb(res);
		})
	},
	// Get products from Ebay API
	getEbayProducts: function(gender, occasion, article, cb) {
		orm.getEbayProducts(gender, occasion, article, function(res) {
			cb(res);
		})
	},
	// Get user information from login
	login: function(email, password, cb) {
		orm.login(email, password, function(res) {
			cb(res);
		})
	}
}

// Exports
module.exports = styles;