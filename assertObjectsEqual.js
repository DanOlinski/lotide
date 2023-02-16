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

// const shirtObject = {color: 'red', size: 'medium'};
// const anotherShirtObject = {size: 'medium', color: 'red'};
// const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
// const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
// const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
// const longSleeveMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};


// assertEqualObjects(shirtObject, anotherShirtObject); //pass
// assertEqualObjects(shirtObject, longSleeveShirtObject); //no pass
// assertEqualObjects(multiColorShirtObject, anotherMultiColorShirtObject); //pass
// assertEqualObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); //no pass