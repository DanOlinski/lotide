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