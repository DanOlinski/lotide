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

// assertEqual('Lighhouse Labs', 'Lighhouse Labs');
// assertEqual(1, 1); 