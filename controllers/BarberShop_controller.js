const express = require("express");

const router = express.Router();

hbsObject = { dummy: "data"}

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

      res.render("index", hbsObject);
    });

  module.exports = router;
