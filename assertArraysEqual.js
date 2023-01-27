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

asserArraysEqual([1,2,3,4], [1,2,3,4]);