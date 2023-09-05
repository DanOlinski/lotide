//This function takes in an object and an array of strings, it will then check if the strings from the givin array are present as keys within the passed in object. The function will also do a second check for object keys that have a value equal to true, and will disconsider the keys that have a value equal to false. CountOnly, will then return the amount of times each item from the passed in array occurs in the passed in object (taking into account the true of false key values).
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (let i of allItems) {
    //if an item in the itemsToCount is set to false it will disregard that item at the filter below
    if (itemsToCount[i]) {
      //if a key in results matches a values in itemsToCount it will add 1 to the value related to that key inside results(representing the amount of times that item occurred)
      if (results[i]) {
        results[i] += 1;
      } else {
        //if results object is empty(it will be empty the first time this loop runs), and/or if there is a key inside results with the name equal to an item inside itemsToCount, it will create a pair inside results; key name will be the name of an item inside allItems and the value  of that key will be 1(representing the amount of times that item occurred)
        results[i] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;