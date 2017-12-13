const express = require("express");
const router = express.Router();
const keys = require("../config/keys.js");
const keyPublishable = keys.stripe.publicKey;
const keySecret = keys.stripe.secretKey;
const stripe = require("stripe")(keySecret);

var hbsObject = {
  dummy: "data"
}

// Function to ensure that the user has been authenticated
// before viewing pages.
const isLoggedIn = function(req, res, next){
    //console.log("isLoggedIn:"+req.isAuthenticated());
    //console.log("user:"+req.user);
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/");
    }
}

// Create all our routes and set up logic within those routes where required.
// Main page where users can sign in. No authentication required here.
router.get("/", function (req, res) {

  var background_images = ["../img/barber1.jpg","../img/barber2.jpg","../img/barber3.jpg","../img/barber4.jpg","../img/barber5.jpg"]

  var randomPhotoIndex = Math.floor(Math.random() * background_images.length); 
  
  hbsObject.background_image = background_images[randomPhotoIndex];
  hbsObject.isLoggedIn = req.isAuthenticated();
  res.render("index", hbsObject);
});

// Request to API using barberID. User must be authenticated.
router.get("/dashboard/:barberID", function (req, res) {

    res.render("dashboardview", hbsObject);

});

// Request to API using clientID. User must be authenticated.
router.get("/client/:clientID", function (req, res) {

    res.render("clientview", {keyPublishable: keyPublishable});

});

// Stripe payments route.
router.post("/charge", function (req, res) {
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge"));
});

module.exports = router;
