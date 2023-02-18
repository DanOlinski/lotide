//This function takes in a source array(arrIn) and an itemsToRemove array, it then returns only the items from the source array that are not in the itemsToRemove array
const without = function(arrIn, remFromArr) {
  let final = [];

  for (let i of arrIn) {
    final.push(i);
  }

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
