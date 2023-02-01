const assertEqual = function(actual, expected) {
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

const eqObjects = function(obj1, obj2) {
  let final;
  let eqPairValues = 0;

  if (Object.entries(obj1).length === Object.entries(obj2).length) {
  
    if (Object.entries(obj1).length === 0) {
      final = true;
    }

    for (let obj1Elms in obj1) {
      for (let obj2Elms in obj2) {

        if (Array.isArray(obj1[obj1Elms]) && Array.isArray(obj2[obj2Elms])) {
          final = (eqArrays(obj2Elms, obj1Elms));

        } else if (obj1Elms === obj2Elms && obj1[obj1Elms] === obj2[obj2Elms]) {
          eqPairValues += 1;
        }
      }  
    }
  } else {
    final = false;
  }
  
  if (eqPairValues === Object.entries(obj1).length && final === undefined && Object.entries(obj1).length !== 0) {
    final = true;
  } else if (eqPairValues !== Object.entries(obj1).length && final === undefined && Object.entries(obj1).length !== 0) {
    final = false;
  }

  return final;
};

const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObject = {size: 'medium', color: 'red'};
const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
const longSleeveMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);