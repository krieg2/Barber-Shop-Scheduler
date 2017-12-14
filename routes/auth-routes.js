const express = require("express");
const router = express.Router();

module.exports = function(passport){

    router.post("/signup",
      passport.authenticate("local-signup",
        { failureRedirect: "/auth/error" }),
        function(req, res){

          req.login(req.user, function(err){

            if(err){
              console.log(err);
              res.redirect("/auth/error");
            }
            req.session.save(function(){
              if(req.user.user_type === "barber"){
                res.redirect("/dashboard/" + req.user.id);
              } else if(req.user.user_type === "client"){
                res.redirect("/client/" + req.user.id);
              } else{
                res.redirect("/");
              }
            });
          });
    });

    router.post("/signin", 
      passport.authenticate("local-signin",
        { failureRedirect: "/auth/error" }),
        function(req, res){

          req.login(req.user, function(err){

            if(err){
              console.log(err);
              res.redirect("/auth/error");
            }
            req.session.save(function(){
              if(req.user.user_type === "barber"){
                res.redirect("/dashboard/" + req.user.id);
              } else if(req.user.user_type === "client"){
                res.redirect("/client/" + req.user.id);
              } else{
                res.redirect("/");
              }
            });
          });
    });

    router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));
    router.get("/google/callback",
      passport.authenticate("google",
        {failureRedirect: "/auth/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err){
              console.log(err);
              res.redirect("/auth/error");
            } else{
              req.session.save(function(){
                res.redirect("/clientorbarber/google");
              });
            }
          });
    });

    router.get("/github", passport.authenticate("github"));
    router.get("/github/callback",
      passport.authenticate("github",
        {failureRedirect: "/auth/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err){
              console.log(err);
              res.redirect("/auth/error");
            } else{
              req.session.save(function(){
                res.redirect("/clientorbarber/github");
              });
            }
          });
    });

    router.get("/facebook", passport.authenticate("facebook", {scope: ["public_profile", "email"]}));
    router.get("/facebook/callback",
      passport.authenticate("facebook",
        {failureRedirect: "/auth/error"}),
        function(req, res){
          req.login(req.user, function(err){
            if(err){
              console.log(err);
              res.redirect("/auth/error");
            } else{
              req.session.save(function(){
                res.redirect("/clientorbarber/facebook");
              });
            }
          });
    });

    router.get("/error", function(req, res){
      res.end("Login Failed");
    });

    router.get("/logout", function(req, res){
      if(req.user){
        req.logout();
      }
      if(req.session){
        req.session.destroy(function(err) {
          if (err){
            console.error(err);
          } else {
            res.clearCookie("server-session-cookie-id");
            res.redirect("/");
          }
        });
      } else{
        res.redirect("/");
      }

    });

    return router;
};