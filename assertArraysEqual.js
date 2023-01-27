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
    final = '😣😣😣 The arrays are not the same';
  }

  if (valuesCheck === arr1.length) {
    final = '😎😎😎 The arrays are the same';
  } else {
    final = '😣😣😣 The arrays are not the same';
  }

  console.log(final);
  //return ''
  
};

asserArraysEqual([1,2,3,4], [1,2,3,4]);