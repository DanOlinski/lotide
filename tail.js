const tail = function(item1) {
  let final = [];
  for (let i = 1; i < item1.length; i++) {
    final.push(item1[i]);
  }
  return final;
};

module.exports = tail; 
