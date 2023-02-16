const letterPositions = function(string) {
  const final = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (final[`${string[i]}`]) {
        final[`${string[i]}`].push(i);
      } else {
        final[`${string[i]}`] = [i];
      }
    }
  }

  return final;
};

module.exports = letterPositions

// console.log(letterPositions('hello')); 