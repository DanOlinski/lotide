let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

const eqArrays = function(arr1, arr2) {
  let valuesCheck = 0;
  let final;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        valuesCheck += 1;
      }
    }

  } else {
    final = false;
  }

  if (valuesCheck === arr1.length) {
    final = true;
  } else {
    final = false;
  }

  return final;
};

console.log(eqArrays([1,2,3,4], [1,2,3,4]));

assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
assertEqual(eqArrays([1,2,3,4], [1,2,3,5]), false);
assertEqual(eqArrays([1,2,3,'test'], [1,2,3,'test']), true);