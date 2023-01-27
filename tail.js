let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

const tail = function(item1) {
  let final = [];
  for (let i = 1; i < item1.length; i++) {
    final.push(item1[i]);
  }
  return final;
};

const arr = ['Hello', 'Lighthouse', 'Labs'];
const result = tail(arr);

assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
assertEqual(arr.length, 3);
