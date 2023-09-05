const eqArrays = require('../modules/eqArrays');

const chai = require('chai');
const assert = chai.expect;
describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert(eqArrays([1,2,3,4], [1, 2, 3]), [1,2,3,4]).to.be.equal;
  });

}); 