
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

module.exports = middle;