const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var morgan = require('morgan');

var port = process.env.PORT || 3000  ;

var app = express();

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/BarberShop_controller.js");

// log all requests to server
app.use(morgan('tiny'));

 // give the server access to them.
app.use("/", routes);

// listens for requests
app.listen(port, function() {
	console.log("Listening on PORT " + port);
});

