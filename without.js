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

module.exports = without

// const assertArraysEqual = require('./assertArraysEqual')
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
// const words = ['hello', 'world', 'lighthouse'];
// without(words, ['lighthouse']);
// assertArraysEqual(words, ['hello', 'world', 'lighthouse']);