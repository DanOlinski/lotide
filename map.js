//this function takes in a function and an array. The function will analize each item in the given array. when map is called the callback function will determines what aspect of the array items you want to visualize. Some options are: array length, first letter of each word in the array or simply print out each item of the given array.
const map = function(array, callback) {
  let final = [];

  for (let i of array) {
    //the callback function takes in a parameter that corresponds to each value of the array
    final.push(callback(i));
  }
  return final;
};

module.exports = map;
