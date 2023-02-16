const takeUntil = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(i);
    if (callback(i)) {
      break;
    }
  }

  return final.slice(0, final.length - 1);
};

module.exports = takeUntil