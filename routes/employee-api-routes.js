var db = require("../models");

module.exports = app => {
  //Get all Employee in db
  app.get("/api/employee", (req, res) => {

    db.Employee.findAll({
      include: [{ all: true, nested: true }]
    }).then( dbEmployee => {
      res.render("clientview", dbEmployee);
    });
  });
  //get Employee where id
  app.get("/api/employee/:id", (req, res) => {
    db.Employee.findOne({
      where: {
        id: req.params.id
      },
        include: [{ all: true, nested: true }]
      }).then( dbEmployee => {
      res.json(dbEmployee);
    });
  });
  //get all Employee where BusinessId
  app.get("/api/employee/business/:id", (req, res) => {
    db.Employee.findAll({
      where: {
        BusinessId: req.params.id
      },
        include: [{ all: true, nested: true }]
      }).then( (dbEmployee) => {
      res.json(dbEmployee);
    });
  });
  //Create new Employee
  app.post("/api/employee", (req, res) => {
    db.Employee.create(req.body).then( dbEmployee => {
      res.json(dbEmployee);
    });
  });
  //Delete Employee
  app.delete("/api/employee/:id", (req, res) => {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbEmployee => {
      res.json(dbEmployee);
    });
  });
  //Update Employee where id
  app.put("/api/employee", (req, res) => {
    db.Employee.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( dbEmployee => {
        res.json(dbEmployee);
      });
  });
};
