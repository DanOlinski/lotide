//This function takes in a function(that outputs an object) and an object. the 'expected' object is what you expect the function will output, assertObjectEqual will then tell you if your function passed the test or not.

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
