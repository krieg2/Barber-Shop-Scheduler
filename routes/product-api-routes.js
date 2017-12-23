const db = require("../models");
const htmlRoutes = require("./html-routes.js");
const isLoggedIn = htmlRoutes.isLoggedIn;

module.exports = app => {

  //Get product where id
  app.get("/api/product/:id", isLoggedIn, (req, res) => {
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
  app.get("/api/product/business/:id", isLoggedIn, (req, res) => {
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
  app.post("/api/product", isLoggedIn, (req, res) => {
    db.Product.create(req.body).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Delete where id
  app.delete("/api/product/:id", isLoggedIn, (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then( dbProduct => {
      res.json(dbProduct);
    });
  });
  //Update Product where id
  app.put("/api/scheduled", isLoggedIn, (req, res) => {
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
