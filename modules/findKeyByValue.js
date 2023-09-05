//This function takes in two arguments (an object and a value). The object is searched (checking if it contains a key equal to the given value), findKeyByValue then returns the key that contains an entry equal to the value argument. If the value is not within the object, findKeyByValue returns undefined.
const findKeyByValue = function(object, value) {
  let final;

  for (let i in object) {
    //comparing key value from given object to the value that is passed into findKeyByValue function
    if (object[i] === value) {
      final = i;
    }
  }
  return final;
};

module.exports = findKeyByValue;