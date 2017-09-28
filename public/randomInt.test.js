// Write a javascript function that randomly returns an integer between 0 and 2. Using this return value and an html button, switch the background image between 3 images. 
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-integer'));
var randomInt = require('./randomInt');

describe.only("randomInt()", function() {
  it("returns a integer", function(){
    var val = randomInt(0, 2);
    expect(val).to.be.an.integer();
  });
  it("returns 0, 1, or 2", function(){
    var val = randomInt(0, 2);
    expect(val).to.equal(0 || 1 || 2);
  });
});