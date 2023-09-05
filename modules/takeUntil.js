//This function takes in two arguments; an array and a callback. The takeUntil() method is used to return the items in the passed in array until the given callback returns true. If the given value is not found or the callback never returns true, the takeUntil() method will return all items in the passed in array.
const takeUntil = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(i);
    //when callback is true the loop is interrupted
    if (callback(i)) {
      break;
    }
  }
  //when the loop finds the value that interrupts the for loop(determined by the callback), that value will be placed as the last item in the final array. We don't want to print that last item so the code bellow removes the last item from the final array.
  return final.slice(0, final.length - 1);
};

module.exports = takeUntil;