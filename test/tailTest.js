const assertEqual = require('../assertEqual');
const tail = require('../tail');

const arr = ['Hello', 'Lighthouse', 'Labs'];
const result = tail(arr);

assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
assertEqual(arr.length, 3);