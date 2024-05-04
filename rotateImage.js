// Best Approach------------------------------------------------------
function rotateImage(arr) {
  let a = new Array(arr.length).fill().map(() => []);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      a[j].unshift(arr[i][j]);
    }
  }
  return a;
}
console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// Approach 2------------------------------------------------------
// function rotateImage(a) {
//   let final = [];
//   for (let i = 0; i < a.length; i++) {
//     let inner = [];
//     for (let j = 0; j < a.length; j++) {
//       inner.push(a[j][i]);
//     }
//     console.log(inner);
//     final.push(inner.reverse());
//   }
//   return final;
// }

// Approach 3-----------------------------------------------------
// function rotateImage(a) {
//   return a.map((row, rowIndex) => row.map((val, colIndex) => a[a.length - 1 - colIndex][rowIndex]));
// }
