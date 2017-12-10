const express = require("express");
const router = express.Router();
var hbsObject = {
  dummy: "data"
}

// Function to ensure that the user has been authenticated
// before viewing pages.
const isLoggedIn = function(req, res, next){
  console.log("isLoggedIn:"+req.isAuthenticated());
  console.log("user:"+req.user);
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/");
    }
}

// Create all our routes and set up logic within those routes where required.
// Main page where users can sign in. No authentication required here.
router.get("/", function (req, res) {

    res.render("index", {isLoggedIn: req.isAuthenticated()});

});

// Request to API using barberID. User must be authenticated.
router.get("/dashboard/:barberID", isLoggedIn, function (req, res) {

    res.render("dashboardview", hbsObject);

});

// Request to API using clientID. User must be authenticated.
router.get("/client/:clientID", isLoggedIn, function (req, res) {

    res.render("clientview", hbsObject);

});

module.exports = router;
