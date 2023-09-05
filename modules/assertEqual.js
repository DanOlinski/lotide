//This module is used for testing and there fore it is not listed in the README file
//This function takes in a function and a primitive value. the 'expected' value is what you expect the function will output, assertEqual will then tell you if your function passed the test or not
let assertEqual = function(actual, expected) {
  let final;

  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(final);
};

module.exports = assertEqual;
