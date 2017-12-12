var db = require("../models");

module.exports = app => {
  //Get all User
  app.get("/api/user", (req, res) => {

    db.User.findAll({}).then( dbUser => {
      res.json(dbUser);
    });
  });
  //Get User where id
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( bdUser => {
      res.json(dbUser);
    });
  });
  //Get User BusinessId
  app.get("/api/user/business/:BusinessId", (req, res) => {
    db.User.findOne({
      where: {
        BusinessId: req.params.BusinessId
      },
      include: [{ all: true, nested: true }]
    }).then( bdUser => {
      res.json(dbUser);
    });
  });
  //Create new User
  app.post("/api/user", (req, res) => {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  //Delete User where id
  app.delete("/api/user/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then( bdUser => {
      res.json(dbUser);
    });
  });
  //Update User where id
  app.put("/api/user", (req, res) => {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdUser => {
        res.json(dbUser);
      });
  });
};
