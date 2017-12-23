const db = require("../models");
const htmlRoutes = require("./html-routes.js");
const isLoggedIn = htmlRoutes.isLoggedIn;

module.exports = app => {
  //Get all User
  app.get("/api/user", isLoggedIn, (req, res) => {

    db.User.findAll({}).then( dbUser => {
      res.json(dbUser);
    });
  });
  //Get User id
  app.get("/api/user/:id", isLoggedIn, (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
        include: [{ all: true, nested: true }]
      }).then( dbUser => {
      res.json(dbUser);
    });
  });
  //Get User BusinessId
  app.get("/api/user/business/:BusinessId", isLoggedIn, (req, res) => {

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
  app.post("/api/user", isLoggedIn, (req, res) => {
    db.User.create(req.body).then( dbUser => {
      res.json(dbUser);
    });
  });
  //Delete User where id
  app.delete("/api/user/:id", isLoggedIn, (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then( bdUser => {
      res.json(dbUser);
    });
  });
  //Update User where id
  app.put("/api/user", isLoggedIn, (req, res) => {
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
