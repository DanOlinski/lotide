const tail = require('../modules/tail');
const chai = require('chai');
const expect = chai.expect;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']).to.be.equal;
  });

}); 