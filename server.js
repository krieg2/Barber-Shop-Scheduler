const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
//const methodOverride = require("method-override");

const port = process.env.PORT || 3000  ;
const app = express();

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Configure Passport...
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GithubStrategy({
	clientID: "674a45c56f1d2f6af776",
	clientSecret: "a40b466e54741a4fb51f90ae4e4cd0e1c1b49658",
	callbackURL: "http://localhost:3000/auth/callback"
}, function(accessToken, refreshToken, profile, done){
	// Look up user in database here?
	done(null, {
		accessToken: accessToken,
		profile: profile
	});
}));
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/BarberShop_controller.js");

// log all requests to server
app.use(morgan('tiny'));

 // give the server access to them.
app.use("/", routes(passport));

// listens for requests
app.listen(port, function() {
	console.log("Listening on PORT " + port);
});

