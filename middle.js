
const middle = function(array) {
  let printMiddle = true;
  let final = [];
  
  if (array.length === 1 || array.length === 2) {
    printMiddle = false;
  }

    if (printMiddle && array.length % 2 === 0) {
      final.push(array[(array.length / 2) - 1]);
      final.push(array[(array.length / 2)]);

    } else if (printMiddle && array.length % 2 !== 0) {
      final.push(array[Math.floor(array.length / 2)]);
    }
  

  return final;
};

module.exports = middle

// const asserArraysEqual = require('./assertArraysEqual')
// asserArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// asserArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); 