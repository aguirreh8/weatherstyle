// Require database connection
const connection = require("../config/connection.js");
const weather = require("weather-js");
require("dotenv").config(); // Ability to use created key references on enviroment
const keys = require("../keys")
const Ebay = require("ebay");
// Set API key to ebay constructor
const ebay = new Ebay({
	app_id: keys.ebayKey.app_id
});

// Create ORM object
const orm = {
	// Use mySQL query to create new user on database
	newUser: function(tableInput, name, password, gender, email, zip, cb) {
		connection.query(
			"INSERT INTO ?? (name, password, gender, email, zip) VALUES (?, ?, ?, ?, ?)", 
			[tableInput, name, password, gender, email, zip],
			function(err, data) {
				if (err) {throw err};
				cb(data); // use callback to send back data
			})
	},
	// Connect to weather-js to get weather
	getWeather: function(zip, cb) {
		weather.find({ search: zip, degreeType: "F" }, function(err, result) {
		  if (err) {
		    console.log(err);
		  }
		  cb(result)
		});
	},
	// Select items from oufits table from database
	getOutfits: function(tableInput, gender, temp, occasion, cb) {
		connection.query(
			"SELECT outfit, photo FROM ?? WHERE (gender = ?) AND (?? = true) AND (occasion = ?)",
			[tableInput, gender, temp, occasion],
			function(err, data) {
				if (err) {throw err};
				cb(data);
			}
		)
	},
	// Connect to Ebay Findings API
	getEbayProducts: function(gender, occasion, article, cb) {
		const params = {
		  'OPERATION-NAME': 'findItemsByKeywords', 
		  'keywords': `${gender} ${occasion} ${article}`
		}

		ebay.get('finding', params, function (err, data) {
		  if(err) throw err
		 
		  cb(data);
		})
	},
	// Select information from users based on input
	login: function(email, password, cb) {
		connection.query(
			"SELECT name, gender, zip FROM user WHERE email = ? AND password = ?",
			[email, password], 
			function(err, data) {
				if (err) {throw err};
				cb(data);
			})
	}
}

// Export object
module.exports = orm;