const express = require("express");
const router = express.Router();

module.exports.setRoutes = function(passport){

    router.get("/google", passport.authenticate("google", {scope: ["profile"], session: true}));
    router.get("/google/callback",
        passport.authenticate("google", {failureRedirect: "/error"}),
        function(req, res){
            req.login(req.user, function(err) {
              if (err) { return next(err); }

              return res.redirect('/client/987654');
            });
        }
    );

    router.get("/github", passport.authenticate("github", {session: true}));
    router.get("/github/callback",
        passport.authenticate("github", {failureRedirect: "/error"}),
        function(req, res){
            //console.log(req);
            //console.log(res);
            //req.login(req.user, function(err) {
            //  if (err) { return next(err); }
               res.redirect('/client/987654');
            //});
        }
        /*passport.authenticate("github", {failureRedirect: "/error"}),
        function(req, res){
            res.redirect("/client/987654");
        }*/
    );

    router.get("/error", function(req, res){
        res.send("Login Failed");
    });

    router.get("/logout", function(req, res){
      req.logout();
      req.session.destroy(function(err) {
        if (err) {
          console.error(err);
        } else {
          res.clearCookie("server-session-cookie-id");
          res.redirect("/");
        }
      });

    });
};

module.exports.router = router;