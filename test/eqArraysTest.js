const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
assertEqual(eqArrays([1,2,3,4], [1,2,3,5]), false);
assertEqual(eqArrays([1,2,3,'test'], [1,2,3,'test']), true);