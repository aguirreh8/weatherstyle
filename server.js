// Create dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// Create express server constructor
const app = express();
// Get port from enviorment if exits, else use stock
const PORT = process.env.PORT || 3000;
// Requirement for sever routing
const routes = require("./controllers/stylesController.js")

// Use static files
app.use(express.static('public'));
// Set url encoding to JSON
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// Use handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use routes
app.use(routes);

// Connect and listen to port
app.listen(PORT, function() {
	console.log(`Listening to port ${PORT}`);
});