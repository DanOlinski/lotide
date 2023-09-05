//This function takes in an array and a callback. The callback function will determine an action to be applied to each item in the passed in array. Map will then return an array with the processed data.
const map = function(array, callback) {
  let final = [];

  for (let i of array) {
    //the callback function takes in an argument that represents each each value of the array
    final.push(callback(i));
  }
  return final;
};

module.exports = map;
