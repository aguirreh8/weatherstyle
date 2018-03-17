// Create dependencies
const express = require("express");
const router = express.Router();
const styles = require("../models/styles.js");
const path = require("path")

// Root routing
router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/register.html"))
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

router.get("/main", function(req, res) {
	const temp = req.body.temp;
})

// Exports
module.exports = router;