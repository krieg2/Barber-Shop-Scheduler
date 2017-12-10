const express = require("express");
const router = express.Router();

module.exports.setRoutes = function(passport){

    router.get("/google", passport.authenticate("google", {scope: ["profile"]}));
    router.get("/google/callback",
      passport.authenticate("google",
        {successRedirect: "/client/987654", failureRedirect: "/error"})
    );

    router.get("/github", passport.authenticate("github"));
    router.get("/github/callback",
      passport.authenticate("github",
        {successRedirect: "/client/987654", failureRedirect: "/error"})
    );

    router.get("/error", function(req, res){
        res.send("Login Failed");
    });

    router.get("/logout", function(req, res){
      req.logout();
      req.session.destroy(function(err) {
        if (err){
          console.error(err);
        } else {
          res.clearCookie("server-session-cookie-id");
          res.redirect("/");
        }
      });

    });
};

module.exports.router = router;