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


module.exports = takeUntil

// const assertArraysEqual = require('./assertArraysEqual')
// const data1 = [1,2,5,7,2,-1,2,4,5];
// const data2 = ['I\'ve','been','to','Hollywood',',','I\'ve','been','to','Redwood'];
// assertArraysEqual(takeUntil(data1, x=> x < 0),[1,2,5,7,2]);
// assertArraysEqual(takeUntil(data2, x=> x === ','),['I\'ve', 'been', 'to', 'Hollywood']);