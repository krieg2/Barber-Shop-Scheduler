var db = require("../models");

module.exports = app => {

  //Get Appoiment where id
  app.get("/api/appoiment/:id", (req, res) => {
    db.Appoiment.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: db.User},
        {model: db.Employee}
      ]
    }).then( dbAppoiment => {
      res.json(dbAppoiment);
    });
  });
  //Get Appoiment where UserId
  app.get("/api/appoiment/user/:id", (req, res) => {
    db.Appoiment.findAll({
      where: {
        UserId: req.params.id
      },
      include: [
        {model: db.Employee}
      ]
    }).then( dbAppoiment => {
      res.json(dbAppoiment);
    });
  });
  //Get Appoiment where EmployeeID
  app.get("/api/appoiment/employee/:id", (req, res) => {
    db.Appoiment.findAll({
      where: {
        EmployeeID: req.params.id
      },
      include: [
        {model: db.User}
      ]
    }).then( dbAppoiment => {
      res.json(dbAppoiment);
    });
  });
  //Create Appoiment where id
  app.post("/api/appoiment", (req, res) => {
    db.Appoiment.create(req.body).then( dbAppoiment => {
      res.json(dbAppoiment);
    });
  });
  //Delete Appoiment where id
  app.delete("/api/appoiment/:id", (req, res) => {
    db.Appoiment.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbAppoiment => {
      res.json(dbAppoiment);
    });
  });
  //Update Appoiment where id
  app.put("/api/appoiment", (req, res) => {
    db.Appoiment.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdAppoiment => {
        res.json(dbAppoiment);
      });
  });
};
