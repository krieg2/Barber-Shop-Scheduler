var db = require("../models");

module.exports = app => {

  //Get product where id
  app.get("/api/product/:id", (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Get product where BusinessId
  app.get("/api/product/business/:id", (req, res) => {
    db.Product.findAll({
      where: {
        BusinessId: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Create new product
  app.post("/api/product", (req, res) => {
    db.Product.create(req.body).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Delete where id
  app.delete("/api/product/:id", (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Update Product where id
  app.put("/api/scheduled", (req, res) => {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then( dbProduct => {
        res.json(dbProduct);
      });
  });
};
