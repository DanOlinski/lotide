//This function compairs two objects and returns true of false (if they are equal or not).
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let final;
  //eqPairValues encreases by 1 every time 2 items match, this number is then used to compair the ammount of values that are the same and the length of the object
  let eqPairValues = 0;

  //the first check is to see if the length of values inside both objects are equal
  console.log(Object.entries(obj1))
  if (Object.entries(obj1).length === Object.entries(obj2).length) {
    //if both objects are empty they are equal
    if (Object.entries(obj1).length === 0) {
      final = true;
    }

    for (let obj1Elms in obj1) {
      for (let obj2Elms in obj2) {
        //if there is an array in the object use the eqArray function to compair both arrays
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
  
  //this checks if all equal values between both objects are the same amount as the length of the objects. final has to be undefined so that it doesnt overwrite any value that might already be attributed above
  if (eqPairValues === Object.entries(obj1).length && final === undefined && Object.entries(obj1).length !== 0) {
    final = true;
  } else if (eqPairValues !== Object.entries(obj1).length && final === undefined && Object.entries(obj1).length !== 0) {
    final = false;
  }
  return final;
};

module.exports = eqObjects;

const assertEqual = require('./assertEqual')
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
console.log(eqObjects({a:[1,2],b:2},{a:[1,2],b:3}))