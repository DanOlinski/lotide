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



const middle = function(array) {
  let printMiddle = true;
  let evenArrayStore = [];
  let oddArrayStore = [];
  let final = [];
  
  if (array.length === 1 || array.length === 2) {
    printMiddle = false;
  }

  for (let i = 0; i < array.length; i++) {

    if (printMiddle === true && array.length % 2 === 0) {
      evenArrayStore.push(array[i]);
    } else if (printMiddle === true && array.length % 2 !== 0) {
      oddArrayStore.push(array[i]);
    }
  }

  if (evenArrayStore[0]) {
    final.push(evenArrayStore[(array.length / 2) - 1]);
    final.push(evenArrayStore[(array.length / 2)]);
  } else if (oddArrayStore[0]) {
    final.push(oddArrayStore[Math.floor(array.length / 2)]);
  }

  return final;
};

asserArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
asserArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);