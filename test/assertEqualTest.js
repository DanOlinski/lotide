const assertEqual = require('../modules/assertEqual');

const chai = require('chai');
const assert = chai.expect;

describe("#assertEqualTest", () => {
  it("returns 'Lighhouse Labs' for 'Lighhouse Labs'", () => {
    assert(assertEqual('Lighhouse Labs', 'Lighhouse Labs'), 'Lighhouse Labs').to.be.equal;
  });

  it('returns 1 for 1', () => {
    assert(assertEqual(1, 1), 1).to.be.equal;
  });
}); 