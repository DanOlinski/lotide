// Converts nested arrays into a single level array.
const flatten = function(arr) {
  const final = [];

  for (let i = 0; i < arr.length; i++) {
    //checking if there is a nested array the looping through that nested array
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        //placing items from nested array into the output array for this function
        final.push(arr[i][j]);
      }
    } else {
      final.push(arr[i]);
    }
  }
  return final;
};

module.exports = flatten;