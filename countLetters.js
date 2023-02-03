let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

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

console.log(countLetters('aaa bb c'));

