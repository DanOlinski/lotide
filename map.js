const map = function(array, callback) {
  let final = [];

  for (let i of array) {
    final.push(callback(i));
  }

  return final;
};


module.exports = map
