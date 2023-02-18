//This function takes in a string and returns an object with the word divided into letters(each letter is a key), and the value of each letter corresponds to the index position of each letter within the string.
const letterPositions = function(string) {
  const final = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (final[string[i]]) {
        final[string[i]].push(i);
      } else {
        final[string[i]] = [i];
      }
    }
  }
  return final;
};

module.exports = letterPositions;