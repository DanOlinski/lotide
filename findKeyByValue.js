let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

const findKeyByValue = function(object, value) {
  let final;

  for (let i of Object.entries(object)) {
  //console.log(value)
  //console.log(i[1])
    if (i[1] === value) {
      final = value;
    }
  }

  return final;
};

const bestTVShouwsByGenre = {
  'sci_fi': 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

console.log(findKeyByValue(bestTVShouwsByGenre, 'The Wire'));
assertEqual(findKeyByValue(bestTVShouwsByGenre, 'That 70s Show'), undefined);
assertEqual(findKeyByValue(bestTVShouwsByGenre, 'The Wire'), 'The Wire');
assertEqual(findKeyByValue(bestTVShouwsByGenre, 'Brooklyn Nine-Nine'), 'Brooklyn Nine-Nine');