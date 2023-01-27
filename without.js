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

const without = function(arrIn, remFromArr) {
  let final = [];
  for (let i = 0; i < arrIn.length; i++) {
    if (arrIn[i] === remFromArr[i]) {
      //console.log(remFromArr[i])
    } else {
      final.push(arrIn[i]);
    }
  }
  //console.log(final)
  return final;
};

asserArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
asserArraysEqual(words, ['hello', 'world', 'lighthouse']);