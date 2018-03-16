//Create dependencies
const orm = require("../config/orm.js");

//Create clothes constructor
const clothes = {
	newUser: function(name, password, gender, email, zip, cb) {
		orm.NewUser("user", name, password, gender, email, zip, function(res) {
				cb(res);
			})
	}
}

module.exports = clothes;