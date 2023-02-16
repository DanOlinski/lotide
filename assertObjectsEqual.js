const eqObjects = require('./eqObjects')

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
 
module.exports = assertEqualObjects
