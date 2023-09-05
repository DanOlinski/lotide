//This function takes in 2 arrays; the 1st array is the source array, and the second array is the items you want to remove from the source array.
const without = function(arrIn, remFromArr) {
  let final = [];

  for (let i of arrIn) {
    final.push(i);
  }

  //remove items from final array that are equal to items found in remFromArr
  for (let i = 0; i < final.length; i++) {
    for (let j = 0; j < remFromArr.length; j++) {
      if (final[i] === remFromArr[j]) {
        final.splice(i,1);
      }
    }
  }

  return final;
};

module.exports = without;
