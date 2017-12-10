const express = require("express");
const router = express.Router();

module.exports.setRoutes = function(passport){

    router.get("/google", passport.authenticate("google", {scope: ["profile"]}));
    router.get("/google/callback",
        passport.authenticate("google", {failureRedirect: "/error"}),
        function(req, res){
            res.send("Login success");
        }
    );
    router.get("/github", passport.authenticate("github"));
    router.get("/github/callback",
        passport.authenticate("github", {failureRedirect: "/error"}),
        function(req, res){
            console.log("Login success");
            res.redirect("/client/987654");
        }
    );
    router.get("/error", function(req, res){
        res.send("Login Failed");
    });
    router.get("/logout", function(req, res){
      req.logout();
      res.redirect("/");
    });
};

module.exports.router = router;