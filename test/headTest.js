const chai = require('chai');
const assert = chai.assert;

const head = require('../modules/head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns 5(string notation) for [5](string notation)', () => {
    assert.strictEqual(head(['5']), '5');
  });
}); 