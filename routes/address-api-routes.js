var db = require("../models");

module.exports = function(app) {
  app.get("/api/address", function(req, res) {

    db.User.findAll({
      include: [db.Post]
    }).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.get("/api/address/:id", function(req, res) {

    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.post("/api/address", function(req, res) {
    db.User.create(req.body).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.delete("/api/address/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

};
