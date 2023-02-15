const middle = require('../middle');
const asserArraysEqual = require('../assertArraysEqual');

asserArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
asserArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);