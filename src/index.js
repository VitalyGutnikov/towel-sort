
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];

  if (matrix === undefined || matrix === 0) {
    return []; 
  }

  matrix.forEach((value, index) => {
    if (index % 2 === 0) {
      result.push(...value);
    } else {
      result.push(...value.reverse());
    }
  })

  return result;
}

