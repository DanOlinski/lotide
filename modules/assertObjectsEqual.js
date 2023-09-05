//This function takes in a function(that outputs an object) and an object. the 'expected' object is what you expect the function will output, assertObjectEqual will then tell you if your function passed the test or not.

//This module is used for testing and there fore it is not listed in the README file
//eqObjects compairs two objects and returns true of false (if they are equal or not)
const eqObjects = require('./eqObjects');

const assertEqualObjects = function(actual, expected) {
  let final;
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    final = `😎😎😎Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    final = `😣😣😣Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(final);
};
 
module.exports = assertEqualObjects;
