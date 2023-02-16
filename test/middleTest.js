// const middle = require('../middle');
// const asserArraysEqual = require('../assertArraysEqual');

// asserArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// asserArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);

const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;

describe("#middle", () => {
  it("returns 4 for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6, 7]), [ 4 ]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6])', () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
}); 