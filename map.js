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

const map = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(callback(i));
  }

  return final;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];
const func = array => {
  for (let i of array) {
    return i[0];
  }
};


asserArraysEqual((map(words, x => x)), ['ground', 'control', 'to', 'major', 'tom']);
asserArraysEqual(map(words, x => x.length), [6,7,2,5,3]);
asserArraysEqual(map(words, func), ['g','c','t','m','t']);
asserArraysEqual(map(words, function(arrayElements) {
  let searchFor = 'tom';
  let count = 0;
  let final;
  if (arrayElements === searchFor) {
    count += 1;
    final = '\n' + `there are ${count} occurences of ${searchFor}`;
  } else final = '\n' + 'item not found';
  return final;
}),
['\n' + 'item not found', '\n' + 'item not found', '\n' + 'item not found', '\n' + 'item not found', '\n' + 'there are 1 occurences of tom']);

