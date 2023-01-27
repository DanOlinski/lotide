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
  //return ''
  
};

const flatten = function(arr) {
  const final = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        final.push(arr[i][j]);
      }
    } else {
      final.push(arr[i]);
    }
  }

  return final;
};

asserArraysEqual(flatten([[0], 1, [2,3],[4]]), [0,1,2,3,4]);
asserArraysEqual(flatten([1, [2,'text', 3],[4], '5']), [1, 2, 'text', 3, 4,'5']);
