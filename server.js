const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var morgan = require('morgan');
var db = require("./models");


var port = process.env.PORT || 3000  ;

var app = express();


app.use(express.static("public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/address-api-routes.js")(app);
require("./routes/appoiment-api-routes.js")(app);
require("./routes/business-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);
require("./routes/product-api-routes.js")(app);
require("./routes/scheduled-api-routes.js")(app);
require("./routes/service-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// log all requests to server
app.use(morgan('tiny'));

// give the server access to them.
//app.use("/", routes);


db.sequelize.sync({}).then(function() {
	// listens for requests
	app.listen(port, function() {
		console.log("Listening on PORT " + port);
	});
});
