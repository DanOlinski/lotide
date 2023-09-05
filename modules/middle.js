//This function takes in an array and returns the values in the middle of that array. If the number of values in the array is even, this module will return the 2 values that are located in the center of the array.
const middle = function(array) {
  let printMiddle = true;
  let final = [];
  
  //if the array has only one element or only 2 elements it has no middle element. In this case this function will return an empty array
  if (array.length === 1 || array.length === 2) {
    //printMiddle is used as boolean to determine if the array has more than 2 elements
    printMiddle = false;
  }

  //if the given array has more than 2 elements and the amount of elements are even the function will return the 2 elements located at the middle of the array
  if (printMiddle && array.length % 2 === 0) {
    final.push(array[(array.length / 2) - 1]);//1st middle element
    final.push(array[(array.length / 2)]);//2nd middle element
    
    //else if the amount of elements in the array is odd it will then print a single values located at the middle of the array
  } else if (printMiddle && array.length % 2 !== 0) {
    final.push(array[Math.floor(array.length / 2)]);
  }
  return final;
};

module.exports = middle;