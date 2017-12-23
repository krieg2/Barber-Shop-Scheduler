const db = require("../models");
const htmlRoutes = require("./html-routes.js");
const isLoggedIn = htmlRoutes.isLoggedIn;

module.exports = app => {

  //Get Appoiment where id
  app.get("/api/appointment/:id", isLoggedIn, (req, res) => {
    db.Appointment.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: db.User},
        {model: db.Employee}
      ]
    }).then( dbAppointment => {
      res.json(dbAppointment);
    });
  });
  //Get Appoiment where UserId

  app.get("/api/appointment/user/:id", isLoggedIn, (req, res) => {
    
    db.Appointment.findAll({
      where: {
        UserId: req.params.id
      },
      include: [
        {model: db.Employee}
      ]
    }).then( dbAppointment => {
      res.json(dbAppointment);
    });
  });
  //Get Appoiment where EmployeeID
  app.get("/api/appointment/employee/:id", isLoggedIn, (req, res) => {
    db.Appointment.findAll({
      where: {
        EmployeeID: req.params.id
      },
      include: [
        {model: db.User}
      ]
    }).then( dbAppointment => {
      res.json(dbAppointment);
    });
  });
  //Create Appoiment where id
  app.post("/api/appointment", isLoggedIn, (req, res) => {
    db.Appointment.create(req.body).then( dbAppointment => {
      res.json(dbAppointment);
    });
  });
  //Delete Appoiment where id
  app.delete("/api/appointment/:id", isLoggedIn, (req, res) => {
    db.Appointment.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbAppointment => {
      res.json(dbAppointment);
    });
  });
  //Update Appoiment where id
  app.put("/api/appointment", isLoggedIn, (req, res) => {
    db.Appointment.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( dbAppointment => {
        res.json(dbAppointment);
      });
  });
};
