const express = require("express");
const router = express.Router();
const db = require("../models");
const keyPublishable = process.env.STRIPE_PUBLIC_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(keySecret);

var hbsObject = {
  dummy: "data"
}

// Function to ensure that the user has been authenticated
// before viewing pages.
const isLoggedIn = function(req, res, next){

    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/");
    }
}

// Create all our routes and set up logic within those routes where required.
// Main page where users can sign in. No authentication required here.
router.get("/", function (req, res) {

  var background_images = ["../img/barber1.jpg", "../img/barber2.jpg",
                           "../img/barber3.jpg", "../img/barber4.jpg",
                           "../img/barber5.jpg"]

  var randomPhotoIndex = Math.floor(Math.random() * background_images.length);

  hbsObject.background_image = background_images[randomPhotoIndex];
  hbsObject.isLoggedIn = req.isAuthenticated();
  if(req.user){
      hbsObject.name = req.user.first_name;
  }

  res.render("index", hbsObject);
});

// Request to API using barberID. User must be authenticated.
router.get("/dashboard/:barberID", isLoggedIn, function (req, res) {

    res.render("dashboardview", hbsObject);

});

// Request to API using clientID. User must be authenticated.
router.get("/client/:clientID", isLoggedIn, function (req, res) {

    db.Business.findAll().then( (businesses) => {

      businesses = businesses.map( (element) => {
           element.key = keyPublishable;
           return element;
      });
      res.render("clientview", {businesses: businesses});
    });

});

// Determine if user is a client or barber.
router.get("/clientorbarber/:provider", isLoggedIn, function (req, res) {

    var idField = req.params.provider + "_id";
    var userId = req.user[idField];

    db.User.findOne( { where: { [idField]: userId }} ).then( (user) => {

      if(user.user_type === "barber"){
        res.redirect("/dashboard/" + user.id);
      } else if(user.user_type === "client"){
        res.redirect("/client/" + user.id);
      } else{
        res.render("clientorbarber", {userId: userId,
                                      idField: idField});
      }
    });

});
router.post("/clientorbarber", isLoggedIn, function (req, res) {

    var userType = req.body.user_type;

    db.User.findOne( { where: { [req.body.idField]: req.body.id }}
    ).then( (user) => {

      user.user_type = userType;
      user.save({fields: ["user_type"]}).then( () => {
        if(userType === "barber"){
          res.redirect("/dashboard/" + user.id);
        } else if(userType === "client"){
          res.redirect("/client/" + user.id);
        } else{
          res.redirect("/");
        }
      });
    });
});

// Stripe payments route.
router.post("/charge", isLoggedIn, function (req, res) {
  let amount = 2500;

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

module.exports.router = router;
module.exports.isLoggedIn = isLoggedIn;