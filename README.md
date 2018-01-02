# Barber Shop Scheduler

[Link to app on Heroku.](https://mighty-crag-92193.herokuapp.com)

This application connects barber shops and salons with customers. Businesses can sign up and monitor their appointments and renvenue through an easy to use web interface. Customers can sign up, find local barbers or salons, and book their appointments at the best time to avoid long waits. 

User authentication is done with [Passport.js](http://www.passportjs.org) for both local accounts with encrypted passwords and through social logins (i.e. Facebook, Google, and Github).

Payments are processed by [Stripe.js](https://stripe.com). Customers are able to pay for appointments in advance.

The application is a **Node.js Express** server hosted on **Heroku**. The database on the back-end is MySQL used with the Sequelize ORM.
