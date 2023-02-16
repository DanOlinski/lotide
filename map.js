const map = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(callback(i));
  }

  return final;
};


module.exports = map

// const assertArraysEqual = require('./assertArraysEqual')
// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const func = array => {
//   for (let i of array) {
//     return i[0];
//   }
// };
// assertArraysEqual((map(words, x => x)), ['ground', 'control', 'to', 'major', 'tom']);
// assertArraysEqual(map(words, x => x.length), [6,7,2,5,3]);
// assertArraysEqual(map(words, func), ['g','c','t','m','t']);
// assertArraysEqual(map(words, function(arrayElements) {
//   let searchFor = 'tom';
//   let count = 0;
//   let final;
//   if (arrayElements === searchFor) {
//     count += 1;
//     final = '\n' + `there are ${count} occurences of ${searchFor}`;
//   } else final = '\n' + 'item not found';
//   return final;
// }),
// ['\n' + 'item not found', '\n' + 'item not found', '\n' + 'item not found', '\n' + 'item not found', '\n' + 'there are 1 occurences of tom']);
