//This function takes in a string and informs the amount of times each character occurs within the given string
const countLetters = function(string) {
  const final = {};

  for (const i of string) {
    //ignores empty spaces
    if (i !== ' ') {
      //if a value in final matches a values in string it will add 1 to the value related to that key inside results (representing the amount of times that values occurs)
      if (final[i]) {
        final[i] += 1;
      } else {
        //if final is empty(it will be empty the first time this loop runs), and/or if there is a value inside final equal to an item inside string, it will create a pair inside results; key name will be the value from inside string and the value of that key will be 1(representing the amount of times that item occured)
        final[i] = 1;
      }
    }
  }
  return final;
};

module.exports = countLetters;


