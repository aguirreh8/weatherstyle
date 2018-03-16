const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers/clothesController.js")

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
	console.log(`Listening to port ${PORT}`);
});