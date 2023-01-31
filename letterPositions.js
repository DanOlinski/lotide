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
    final = '😣😣😣 Assertion failed';
  }

  if (valuesCheck === arr1.length) {
    final = '😎😎😎 Assertion passed';
  } else {
    final = '😣😣😣 Assertion failed';
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

const letterPositions = function(string) {
  const final = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (final[`${string[i]}`]) {
        final[`${string[i]}`].push(i);
      } else {
        final[`${string[i]}`] = [i];
      }
    }
  }

  return final;
};

console.log(letterPositions('hello'));