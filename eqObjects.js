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

const eqObjects = function(obj1, obj2) {
  let final;
  let eqValues = 0;
  let checkedValues = [];

  if (Object.entries(obj1).length === Object.entries(obj2).length) {

    for (let obj1Arr of Object.entries(obj1)) {
      for (let obj1Elem of obj1Arr) {
        for (let obj2Arr of Object.entries(obj2)) {
          for (let obj2Elem of obj2Arr) {
            
            if (Array.isArray(obj2Elem) && Array.isArray(obj1Elem)) {
              final = (eqArrays(obj2Elem, obj1Elem));
            } else if (obj2Elem === obj1Elem) {
              eqValues += 1;
            }
          }
        }
        
        checkedValues.push(obj1Elem);
      }
    }

    if (eqValues === checkedValues.length && final === undefined) {
      final = true;
    } else if (eqValues !== checkedValues.length && final === undefined) {
      final = false;
    }
  } else {
    final = false;
  }

  return final;
};

const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObjec = {size: 'medium', color: 'red'};
const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
const longSleeveMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);