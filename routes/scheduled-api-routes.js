var db = require("../models");

module.exports = app => {
  //Get scheduled where id
  app.get("/api/scheduled/:id", (req, res) => {
    db.Scheduled.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbScheduled => {
      res.json(dbScheduled);
    });
  });
  //Get scheduled where UserId
  app.get("/api/scheduled/user/:id", (req, res) => {
    db.Scheduled.findOne({
      where: {
        UserId: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbScheduled => {
      res.json(dbScheduled);
    });
  });
  //Create new scheduled
  app.post("/api/scheduled", (req, res) => {
    db.Scheduled.create(req.body).then( dbScheduled => {
      res.json(dbScheduled);
    });
  });
  //Delete scheduled where id
  app.delete("/api/scheduled/:id", (req, res) => {
    db.Scheduled.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbScheduled => {
      res.json(dbScheduled);
    });
  });
  //Update Scheduled where id
  app.put("/api/scheduled", (req, res) => {
    db.Scheduled.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdScheduled => {
        res.json(dbScheduled);
      });
  });
};
