//This module is currently not listed as a final product in the README file, however, access to this function is not restricted
//This function takes in two arguments (an object and a function). The function determines what value it is looking for from within the object, and findKey returns the key that holds the value it is looking for.
const findKey = function(object, callback) {
  let final;

  for (let i in object) {
    if (callback(object[i])) {
      final = i;
      //once the key is found the loop stops
      break;
    }
  }
  return final;
};
 
module.exports = findKey;