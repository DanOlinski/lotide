let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

const eqObjects = function(obj1, obj2) {
  let final;
  let eqValues = 0;
  let checkedValues = [];

  if (Object.entries(obj1).length === Object.entries(obj2).length) {

    for (let i of Object.entries(obj1)) {
      for (let k of i) {
        for (let j of Object.entries(obj2)) {
          for (let m of j) {
            if (m === k) {
              eqValues += 1;
            }
          }
        }
        
        checkedValues.push(k);
      }
    }
    
    if (eqValues === checkedValues.length) {
      final = true;
    } else {
      final = false;
    }
  } else {
    final = false;
  }

  return final;
};

const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObjec = {size: 'medium', color: 'red'};
assertEqual(eqObjects(shirtObject, anotherShirtObjec), true);

const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);