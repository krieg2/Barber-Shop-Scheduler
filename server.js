 const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const db = require("./models");
const port = process.env.PORT || 3000  ;
const app = express();
require("dotenv").config();


app.use('/clientorbarber/', express.static(path.join(__dirname, 'public')));
app.use('/dashboard/', express.static(path.join(__dirname, 'public')));
app.use('/client/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Passport
var passport = require("./config/passport.js")(app);

// Import routes
var routes = require("./routes/html-routes.js");
var authRoutes = require("./routes/auth-routes.js")(passport);

app.use("/", routes);
app.use("/auth", authRoutes);

require("./routes/address-api-routes.js")(app);
require("./routes/appointment-api-routes.js")(app);
require("./routes/business-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);
require("./routes/product-api-routes.js")(app);
require("./routes/schedule-api-routes.js")(app);
require("./routes/service-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// log all requests to server
app.use(morgan('tiny'));

// listens for requests
db.sequelize.sync({ force: false }).then(function() {
    // listens for requests
    app.listen(port, function() {
        console.log("Listening on PORT " + port);
    });
});