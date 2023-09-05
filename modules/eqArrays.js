//This function compares two arrays and returns true of false (if they are equal or not)
const eqArrays = function(arr1, arr2) {
  //the amount of values from the arrays that are equal will be stored into valuesChecked. If the valuesChecked are equal to array length then both arrays are equal
  let valuesCheck = 0;
  let final;

  //if the length of both arrays are not equal it can be determined that the arrays aren't equal so it won't run the loop that checks for equal values
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        valuesCheck += 1;
      }
    }

    if (valuesCheck === arr1.length) {
      final = true;
    } else {
      final = false;
    }
  } else {
    final = false;
  }

  return final;
};

module.exports = eqArrays;