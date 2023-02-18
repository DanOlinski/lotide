//This function takes in a function and a primative value. the 'expected' value is what you expect the function will output, assertEqual will then tell you if your function passed the test or not
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
