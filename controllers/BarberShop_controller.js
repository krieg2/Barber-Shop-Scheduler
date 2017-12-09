const express = require("express");
const router = express.Router();
hbsObject = {
  dummy: "data"
}

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

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