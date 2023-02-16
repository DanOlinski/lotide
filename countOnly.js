const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (let i of allItems) {
    if (itemsToCount[i]) {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly

// const assertEqual = require('./assertEqual')
// const firstNames = [
//   'Karl',
//   'Salima',
//   'Aghouhanna',
//   'Fang',
//   'Kavith',
//   'Jason',
//   'Salima',
//   'Fang',
//   'Joe'
// ];
// const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false});

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);