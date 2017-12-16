const Nightmare = require('nightmare');
const expect = require('chai').expect;


describe("barbershop", function() {

  this.timeout(30000);

  it('should create a new user', done => {
    Nightmare ({show: true})
      .goto("http://localhost:3000/")
      .click("#sign-up")
      .wait(1000)
      .type("#signup-firstName","John")
      .type("#signup-lastName","Smith")
      .type("#signup-email","johnsmith123@barbershop.com")
      .type("#signup-password","demo123")
      .click("#customer-type")
      .click("#signup-submit")
      .wait(1000)
      .evaluate( () =>{
        return window.location.href;
      }).then( url => {
        console.log(url);
        expect(url).not.equal("http://localhost:3000/auth/error");
        done();
      });
    });

    it('should get a error while creating a existing user', done => {
      Nightmare ({show: true})
        .goto("http://localhost:3000/")
        .click("#sign-up")
        .wait(1000)
        .type("#signup-firstName","John")
        .type("#signup-lastName","Smith")
        .type("#signup-email","johnsmith123@barbershop.com")
        .type("#signup-password","demo123")
        .click("#customer-type")
        .click("#signup-submit")
        .wait(1000)
        .evaluate( () =>{
          return window.location.href;
        }).then( url => {
          console.log(url);
          expect(url).equal("http://localhost:3000/auth/error");
          done();
        });
      });
});
