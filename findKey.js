const findKey = function(object, callback) {
  let final;

  for (let i in object) {
    //console.log(i)
    //console.log(object[i].stars)
    if (callback(object[i])) {
      final = i;
      break;
    }
  }

  return final;
};

module.exports = findKey

// const assertEqual = require('./assertEqual')
// const obj = {'Blue Hill': {stars:1}, 'Akaleri': {stars:3}, 'noma': {stars:2}, 'alBulli': {stars:3}, 'Ora': {stars:2}, 'Akelarre': {stars:3},};

// assertEqual(findKey(obj, x=>x.stars === 2), 'noma');
// assertEqual(findKey(obj, x=>x.stars === 1), 'Blue Hill');