

const countLetters = function(string) {
  const final = {};
  for (const i of string) {

    if (i !== ' ') {
      if (final[i]) {
        final[i] += 1;
      } else {
        final[i] = 1;
      }
    }
  }

  return final;
};

module.exports = countLetters

//console.log(countLetters('aaa bb c'));

