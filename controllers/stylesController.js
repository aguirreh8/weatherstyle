// Create dependencies
const express = require("express");
const router = express.Router();
const styles = require("../models/styles.js");
const path = require("path")

// Root routing
router.get("/register", function(req, res) {
	res.render("register");
})

router.get("/", function(req, res) {
	styles.getWeather(function(results) {
		const weather = results[0].current;
		res.render("weatherStyle", {weather: weather});
	})
})


router.get("/api/:gender&:temp&:occasion", function(req, res) {
	styles.getOutfits(req.params.gender, req.params.temp, req.params.occasion, function(results) {
		res.json(results);
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

// Exports
module.exports = router;