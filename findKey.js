const findKey = function(object, callback) {
  let final;

  for (let i in object) {
    if (callback(object[i])) {
      final = i;
      break;
    }
  }

  return final;
};
 
module.exports = findKey