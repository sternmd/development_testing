var chai   = require('chai'); //requires the chai bdd library
var expect = chai.expect;     //expect chai library
var db     = db || {};        //mock database object
//^^^ this is namespacing

//describe a set of tests
describe('How BDD testing should work for newbies', function () {

//callbacks contain tests
//IT is a test
it('should have a passing grade in mocha', function () {
  var grade = 8; // 8 out of 10 to pass
  expect(grade).to.be.above(7);
  })



})
