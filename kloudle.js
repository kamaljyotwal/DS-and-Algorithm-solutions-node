// Best approach
function compute(source) {
  const frequency = new Map();

  source.forEach((i) => {
    frequency.set(i, (frequency.get(i) || 0) + 1);
  });

  return Array.from(frequency)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);
}

// ----------------------------------------------------
// function compute(source) {
//   // first creating input arr without duplicates.
//   let arrWD = [...new Set(source)];
//   let final = [];
//   let step2Arr = [];

//   // looping and creating nested 1D matrix containing items and its no. of iterations
//   for (let i = 0; i < arrWD.length; i++) {
//     let count = 0;
//     let countArr = [0, 0];
//     for (let j = 0; j < source.length; j++) {
//       if (source[j] == arrWD[i]) {
//         count++;
//       }
//       countArr = [count, arrWD[i]];
//     }
//     step2Arr.push(countArr);
//   }
//   // sorting the nested arr and sending values in final arr
//   let res = step2Arr.sort((a, b) => b[0] - a[0]);
//   res.map((i) => final.push(i[1]));
//   return final;
// }

console.log(
  compute([
    2, 4, 5, 2, 7, 1, 1, 1, 7, 7, 9, 3, 0, 8, 7, 9, 9, 1, 9, 7, 3, 4, 2, 7, 4, 4, 0, 2, 2, 8, 0, 8,
    9, 7, 0, 7, 1, 9, 1, 4,
  ])
);
// [7, 1, 9, 2, 4, 0, 8, 3, 5]
