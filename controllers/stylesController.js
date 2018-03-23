// Create dependencies
const express = require("express");
const router = express.Router();
const styles = require("../models/styles.js");
const path = require("path")

// Send to register page
router.get("/register", function(req, res) {
	res.render("register");
})

// Send to main page and post current weather from weather-js if zip is provided 
// Otherwise default to 07002 
router.get("/:zip?", function(req, res) {
	let passedZip = "";
	if (req.params.zip === undefined) {
		passedZip = "07002";
	} else {
		passedZip = req.params.zip;
	}

	styles.getWeather(passedZip, function(results) {
		const location = results[0].location;
		const weather = results[0].current;
		const forecast = results[0].forecast;
		res.render("weatherStyle", {
			weather: weather,
			location: location
		});
	})
})

// Get outfit items from outfits table from database
router.get("/api/:gender&:temp&:occasion", function(req, res) {
	styles.getOutfits(req.params.gender, req.params.temp, req.params.occasion, function(results) {
		res.json(results);
	})
})

// Get products from Ebay API
router.get("/api/ebay/:gender&:occasion&:article?", function(req, res) {
	styles.getEbayProducts(req.params.gender, req.params.occasion, req.params.article, function(results) {
		const parsedResult = results.findItemsByKeywordsResponse[0].searchResult[0].item;
		res.json(parsedResult);
	})
})

// Create new user
router.post("/api/newUser", function(req, res) {
	const name = req.body.name;
	const password = req.body.password;
	const gender = req.body.gender;
	const email = req.body.email;
	const zip = req.body.zip;

	styles.newUser(name, password, gender, email, zip, function(results) {
		res.json(results);
	})
})

router.get("/api/users/:email&:password", function(req, res) {
	const email = req.params.email;
	const password = req.params.password;

	styles.login(email, password, function(results) {
		res.json(results);
	})
})

// Exports
module.exports = router;