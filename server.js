const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const keys = require("./config/keys.js");
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, function(accessToken, refreshToken, profile, done){
    // Look up user in database here?
    console.log(profile);
    done(null, {
        accessToken: accessToken,
        profile: profile
    });
}));
passport.use(new GithubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "http://localhost:3000/auth/github/callback"
}, function(accessToken, refreshToken, profile, done){
    // Look up user in database here?
    console.log(profile);
    done(null, {
        accessToken: accessToken,
        profile: profile
    });
}));
passport.serializeUser(function(user, done){
    done(null, user);
});
passport.deserializeUser(function(user, done){
    done(null, user);
});

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/BarberShop_controller.js");
var authRoutes = require("./routes/auth-routes.js");
authRoutes.setRoutes(passport);
app.use("/", routes);
app.use("/auth", authRoutes.router);

// log all requests to server
app.use(morgan("tiny"));

// listens for requests
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});

