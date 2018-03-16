const express = require("express");
const router = express.Router();
const clothes = require("../models/clothes.js");
const path = require("path")

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/test.html"))
})

//Create new user
router.post("/api/newUser", function(req, res) {
	const name = req.body.name;
	const password = req.body.password;
	const gender = req.body.gender;
	const email = req.body.email;
	const zip = req.body.zip;

	clothes.newUser(name, password, gender, email, zip, function(results) {
		res.json(results);
	})
})

module.exports = router;