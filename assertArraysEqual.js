const asserArraysEqual = function(arr1, arr2) {
  let valuesCheck = 0;
  let final;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        valuesCheck += 1;
      }
    }

  } else {
    final = `😣😣😣Assertion Failed: ${arr1} !== ${arr2}`;
  }

  if (valuesCheck === arr1.length) {
    final = `😎😎😎Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    final = `😣😣😣Assertion Failed: ${arr1} !== ${arr2}`;
  }

  console.log(final);  
};

module.exports = asserArraysEqual