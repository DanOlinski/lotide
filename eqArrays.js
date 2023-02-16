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

module.exports = eqArrays 

