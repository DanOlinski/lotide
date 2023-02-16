const without = function(arrIn, remFromArr) {
  let final = [];
  for (let i = 0; i < arrIn.length; i++) {
    if (arrIn[i] === remFromArr[i]) {
    } else if(arrIn[i] !== remFromArr[i]){
      final.push(arrIn[i]);
    }
  }
  return final;
};

module.exports = without