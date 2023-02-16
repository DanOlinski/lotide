const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual')

// assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
// assertEqual(eqArrays([1,2,3,4], [1,2,3,5]), false);
// assertEqual(eqArrays([1,2,3,'test'], [1,2,3,'test']), true);

const chai = require('chai');
const assert = chai.expect;
describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert(eqArrays([1,2,3,4], [1, 2, 3]), [1,2,3,4]).to.be.equal;
  });

});