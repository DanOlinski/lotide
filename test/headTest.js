// const assertEqual = require('../assertEqual')
// const head = require('../head')

// assertEqual(head([]), undefined);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

const chai = require('chai');
const assert = chai.assert;

const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns 5(string notation) for [5](string notation)', () => {
    assert.strictEqual(head(['5']), '5');
  });
});