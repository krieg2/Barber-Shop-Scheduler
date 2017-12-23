const db = require("../models");
const htmlRoutes = require("./html-routes.js");
const isLoggedIn = htmlRoutes.isLoggedIn;

module.exports = app => {
  //Get all service
  app.get("/api/service", isLoggedIn, (req, res) => {

    db.Service.findAll({}).then( dbService => {
      res.json(dbService);
    });
  });
  //Get service where id
  app.get("/api/service/:id", isLoggedIn, (req, res) => {

    db.Service.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbService => {
      res.json(dbService);
    });
  });
  //Get service where UserId
  app.get("/api/service/:id", isLoggedIn, (req, res) => {
    db.Service.findAll({
      where: {
        UserId: req.params.id
      },
      //Do not need the employee
      //include: [db.Employee]
    }).then( dbService => {
      res.json(dbService);
    });
  });
  //Create new service
  app.post("/api/service", isLoggedIn, (req, res) => {
    db.Service.create(req.body).then( dbService => {
      res.json(dbService);
    });
  });
  //Delete Service where id
  app.delete("/api/service/:id", isLoggedIn, (req, res) => {
    db.Service.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbService => {
      res.json(dbService);
    });
  });
  //Update service where id
  app.put("/api/service", isLoggedIn, (req, res) => {
    db.Service.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdService => {
        res.json(dbService);
      });
  });
};
