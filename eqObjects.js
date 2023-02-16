const eqArrays = require('./eqArrays')

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

module.exports = eqObjects