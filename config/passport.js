const passport = require("passport");
const session = require("express-session");
const FileStore = require('session-file-store')(session);
const GithubStrategy = require("passport-github").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcryptjs");
const port = process.env.PORT || 3000 ;
const host = process.env.HOST;

// Configure Passport...

module.exports = function(app){

    app.use(session({
      name: "server-session-cookie-id",
      secret: process.env.SESSION_SECRET,
      saveUninitialized: true,
      resave: true,
      store: new FileStore(),
      unset: "destroy",
      cookie: {
        maxAge: null,
        httpOnly: false,
        path: "/",
        secure: false
      }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    // Google
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: host+":"+port+"/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {

        //console.log(profile);
        db.User.findOne({
          where: {
            google_id: profile.id
          }
        }).then( user => {

          if(!user){
            // Find user by email.
            db.User.findOne({
              where: {
                email: profile.emails[0].value
              }
            }).then( user => {

              if(!user){
                // Create a user based on the returned profile.
                let first = profile._json.name.givenName;
                first = first.charAt(0).toUpperCase() + first.slice(1);
                let last = profile._json.name.familyName;
                last = last.charAt(0).toUpperCase() + last.slice(1);
                let newUser = {
                  google_id: profile.id,
                  first_name: first,
                  last_name: last,
                  email: profile.emails[0].value
                }
                // Create the new user.
                db.User.create( newUser
                ).then(function(nUser){
                    return done(null, nUser);
                });
              } else{
                // Update the existing user with a google_id.
                user.google_id = profile.id;
                user.save({fields: ["google_id"]}).then( () => {
                  return done(null, user);
                });
              }
            });
          } else{
            return done(null, user);
          }
        });
    }));

    // GitHub
    passport.use(new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: host+":"+port+"/auth/github/callback"
    }, (accessToken, refreshToken, profile, done) => {

        //console.log(profile);
        db.User.findOne({
          where: {
            github_id: profile.id
          }
        }).then( user => {

          if(!user){
            // Find user by email.
            db.User.findOne({
              where: {
                email: profile._json.email
              }
            }).then( user => {

              if(!user){
                // Create a user based on the returned profile.
                let names = profile._json.name.split(" ");
                let first = names[0];
                first = first.charAt(0).toUpperCase() + first.slice(1);
                let last = names[1];
                last = last.charAt(0).toUpperCase() + last.slice(1);
                let newUser = {
                  github_id: profile.id,
                  first_name: first,
                  last_name: last,
                  email: profile._json.email
                }
                // Create the new user.
                db.User.create(
                  newUser
                ).then(function(nUser){
                    return done(null, nUser);
                });
              } else{
                // Update the existing user with a github_id.
                user.github_id = profile.id;
                user.save({fields: ["github_id"]}).then( () => {
                  return done(null, user);
                });
              }
            });
          } else{
            return done(null, user);
          }
        });
    }));

    // Facebook
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: host+":"+port+"/auth/facebook/callback",
        passReqToCallback: true
    }, (req, accessToken, refreshToken, profile, done) => {

       //console.log(profile);
        db.User.findOne({
          where: {
            facebook_id: profile.id
          }
        }).then( user => {

          if(!user){
            // Find user by first and last name.
            let names = profile.displayName.split(" ");
            db.User.findOne({
              where: {
                first_name: names[0],
                last_name: names[1]
              }
            }).then( user => {

              if(!user){
                // Create a user based on the returned profile.
                let names = profile.displayName.split(" ");
                let first = names[0];
                first = first.charAt(0).toUpperCase() + first.slice(1);
                let last = names[1];
                last = last.charAt(0).toUpperCase() + last.slice(1);
                let newUser = {
                  facebook_id: profile.id,
                  first_name: profile.name.givenName ? profile.name.givenName : first,
                  last_name: profile.name.familyName ? profile.name.familyName : last,
                  email: profile.email ? profile.email : "temp@blank.com"
                }
                // Create the new user.
                db.User.create(
                  newUser
                ).then(function(nUser){
                    return done(null, nUser);
                });
              } else{
                // Update the existing user with a facebook_id.
                user.facebook_id = profile.id;
                user.save({fields: ["facebook_id"]}).then( () => {
                  return done(null, user);
                });
              }
            });
          } else{
            return done(null, user);
          }
        });
    }));

    // Local
    passport.use("local-signin", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: true,
        passReqToCallback: true
      }, (req, email, password, done) => {

        db.User.findOne({
          where: {
            email: email
          }
        }).then( user => {
          // User must exist to sign in.
          if(!user){
            return done(null, false);
          } // Compare the encrypted passwrd.
          if(!bcrypt.compareSync(password, user.password)){
            return done(null, false);
          }
          return done(null, user);
        });
      }
    ));
    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: true,
        passReqToCallback: true
      }, (req, email, password, done) => {

        db.User.findOne({
          where: {
            email: email
          }
        }).then( user => {
          // User already exists.
          if(user){
            return done(null, false);
          } else{
            var newUser = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              user_type: req.body.user_type,
              password: bcrypt.hashSync(req.body.password, 10) // Encrypt passwrd.
            }
            // Create the new user.
            db.User.create( newUser
            ).then(function(nUser){
                return done(null, nUser);
            });
          }
        });
      }
    ));

    // Serialize and deserialize the user.
    passport.serializeUser( (user, done) => {
        done(null, user);
    });
    passport.deserializeUser( (user, done) => {
        done(null, user);
    });

    return passport;
};