const express = require("express");
const router = express.Router();

module.exports.setRoutes = function(passport){

    router.get("/google", passport.authenticate("google", {scope: ["profile"]}));
    router.get("/google/callback",
      passport.authenticate("google",
        {failureRedirect: "/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err) { return next(err); }
            req.session.save(function(){
                res.redirect("/api/employee");
            });
          });
    });

    router.get("/github", passport.authenticate("github"));
    router.get("/github/callback",
      passport.authenticate("github",
        {failureRedirect: "/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err) { return next(err); }
            req.session.save(function(){
                res.redirect("/client/987654");
            });
          });
    });

    router.get("/facebook", passport.authenticate("facebook"));
    router.get("/facebook/callback",
      passport.authenticate("facebook",
        {failureRedirect: "/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err) { return next(err); }
            req.session.save(function(){
                res.redirect("/client/987654");
            });
          });
    });

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
