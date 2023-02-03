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
    final = `😣😣😣Assertion Failed: ${arr1} !== ${arr2}`;
  }

  if (valuesCheck === arr1.length) {
    final = `😎😎😎Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    final = `😣😣😣Assertion Failed: ${arr1} !== ${arr2}`;
  }

  console.log(final);
};

const takeUntil = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(i);
    //console.log(i)
    if (callback(i)) {
      break;
    }
  }

  return final.slice(0, final.length - 1);
};

const data1 = [1,2,5,7,2,-1,2,4,5];
const data2 = ['I\'ve','been','to','Hollywood',',','I\'ve','been','to','Redwood'];

asserArraysEqual(takeUntil(data1, x=> x < 0),[1,2,5,7,2]);
asserArraysEqual(takeUntil(data2, x=> x === ','),['I\'ve', 'been', 'to', 'Hollywood']);