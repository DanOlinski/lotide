//This function takes in an array and returns all values except for the first value of the given array.
const tail = function(item1) {
  let final = [];

  //the loop goes through the array but disregards index 0
  for (let i = 1; i < item1.length; i++) {
    //every item of the array (excluding index 0) is pushed into the variable 'final'
    final.push(item1[i]);
  }
  return final;
};

module.exports = tail;
