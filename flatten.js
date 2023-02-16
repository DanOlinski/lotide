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

module.exports = flatten

// const assertArraysEqual = require('./assertArraysEqual')
// assertArraysEqual(flatten([[0], 1, [2,3],[4]]), [0,1,2,3,4]);
// assertArraysEqual(flatten([1, [2,'text', 3],[4], '5']), [1, 2, 'text', 3, 4,'5']);
