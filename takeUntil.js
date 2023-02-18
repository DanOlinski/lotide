//This function takes in two arguments; an array and a function, the function arguments determines what value it will recognize from the array. takeUntill will then return all of the values of the given array but will stop returning the array items when it finds the value informed in the function argument.
const takeUntil = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(i);
    //when value is found loop is interrupted
    if (callback(i)) {
      break;
    }
  }
  //when the loop finds the value that interrupts the for loop(determined in the callback), that value will be placed as the last item in the final array. We don't want to print that last item so the code bellow remoes the last item from the final array.
  return final.slice(0, final.length - 1);
};

module.exports = takeUntil;