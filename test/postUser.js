const Nightmare = require('nightmare');
const expect = require('chai').expect;


describe("post a new user", function() {

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
      .evaluate( () =>{
        return document.title;
      }).then( title => {
        expect(title).not.equal("name");
        done();
      });
  });
});
