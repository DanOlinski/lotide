//This function compares two objects and returns true of false (if they are equal or not).

const eqArrays = require('./eqArrays');
const eqObjects = function(obj1, obj2) {
//checking if both objects have the same ammount of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {

    for (let i in obj1) {
      //if a key has an array use eqArray to compare arrays inside obj1 and obj2
      if (Array.isArray(obj1[i])) {
        if (!eqArrays(obj1[i], obj2[i])) {
          return false;
        }
      } else {
        //if key value is not an array compare the the values of each key within both objects
        if (obj1[i] !== obj2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;
