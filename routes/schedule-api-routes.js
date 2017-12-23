const db = require("../models");
const htmlRoutes = require("./html-routes.js");
const isLoggedIn = htmlRoutes.isLoggedIn;

module.exports = app => {
  //Get schedule where id
  app.get("/api/schedule/:id", isLoggedIn, (req, res) => {
    db.schedule.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbSchedule => {
      res.json(dbSchedule);
    });
  });
  //Get Schedule where UserId
  app.get("/api/schedule/user/:id", isLoggedIn, (req, res) => {
    db.Schedule.findOne({
      where: {
        UserId: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbSchedule => {
      res.json(dbSchedule);
    });
  });
  //Create new Schedule
  app.post("/api/schedule", isLoggedIn, (req, res) => {
    db.Schedule.create(req.body).then( dbSchedule => {
      res.json(dbSchedule);
    });
  });
  //Delete Schedule where id
  app.delete("/api/schedule/:id", isLoggedIn, (req, res) => {
    db.Schedule.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbSchedule => {
      res.json(dbSchedule);
    });
  });
  //Update Schedule where id
  app.put("/api/schedule", isLoggedIn, (req, res) => {
    db.Schedule.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdSchedule => {
        res.json(dbSchedule);
      });
  });
};
