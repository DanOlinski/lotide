const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1,2,3,4], [1,2,3,4]);

const chai = require('chai');
const assert = chai.expect;

describe("#assertArrayEqualTest", () => {
  it("returns [1,2,3,4] for [1,2,3,4]", () => {
    assert(assertArraysEqual([1,2,3,4], [1,2,3,4]), [1,2,3,4]).to.be.equal;
  });

}); 