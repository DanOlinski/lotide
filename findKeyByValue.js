
const findKeyByValue = function(object, value) {
  let final;

  for (let i of Object.entries(object)) {
    if (i[1] === value) {
      final = value;
    }
  }

  return final;
};

module.exports = findKeyByValue
