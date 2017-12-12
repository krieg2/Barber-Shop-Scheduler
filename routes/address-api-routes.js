var db = require("../models");

module.exports = app => {
  //Get Address where id
  app.get("/api/address/:id", (req, res) => {
    db.Address.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbAddress => {
      res.json(dbAddress);
    });
  });
  //Get Address where UserId
  app.get("/api/address/:id", (req, res) => {
    db.Address.findOne({
      where: {
        UserId: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbAddress => {
      res.json(dbAddress);
    });
  });
  //Create new Address
  app.post("/api/address", (req, res) => {
    db.Address.create(req.body).then( dbAddress => {
      res.json(dbAddress);
    });
  });
  //Delete Address where id
  app.delete("/api/Address/:id", (req, res) => {
    db.Address.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbAddress => {
      res.json(dbAddress);
    });
  });
  //Update Address where id
  app.put("/api/address", (req, res) => {
    db.Address.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( bdAddress => {
        res.json(dbAddress);
      });
  });
};
