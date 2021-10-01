//solution i liked the most

function matrixElementsSum(matrix) {
  let count = 0;
  // console.log(matrix[0])
  for (let i = 0; i < matrix[0].length; i++) {
  

    for (let j = 0; j < matrix.length; j++) {
      // console.log(`inner ${matrix[j]}`);
      if (matrix[j][i] == 0) {
        break;
      }
      count += matrix[j][i];
    }
  }
  return count;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
