const express = require("express");
const router = express.Router();
hbsObject = {
  dummy: "data"
}


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

  var background_images = ["../img/barber1.jpg","../img/barber2.jpg","../img/barber3.jpg","../img/barber4.jpg","../img/barber5.jpg"]

  var randomPhotoIndex = Math.floor(Math.random() * background_images.length); 
  
  hbsObject.background_image = background_images[randomPhotoIndex]
  res.render("index", hbsObject);
});

router.get("/dashboard/:barberID", function (req, res) {
  // request to API using barberID
  res.render("dashboardview", hbsObject);

});

router.get("/client/:clientID", function (req, res) {
  // request to API using clientID

  res.render("clientview", hbsObject);
});


module.exports = router;