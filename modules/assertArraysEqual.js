//This module is used for testing and there fore it is not listed in the README file
//This function takes in a function(that outputs an array) and an array. the 'expected' value an array that you expect the function will output, assertArraysEqual will then tell you if your function passed the test or not.
const eqArray = require('./eqArrays');
const asserArraysEqual = function(arr1, expectedArr) {
  let final;
  
  //eqArray is used to compair 2 arrays
  if (eqArray(arr1, expectedArr)) {
    //message that arrays are equal
    final = `😎😎😎Assertion Passed: ${arr1} === ${expectedArr}`;
  } else {
    //message that arrays are not equal
    final = `😣😣😣Assertion Failed: ${arr1} !== ${expectedArr}`;
  }
  console.log(final);
};

module.exports = asserArraysEqual;