// function solution(inputArray) {
//   let sortedArr = inputArray.sort((a, b) => a - b);

//   for (let i = 2; i < 15; i++) {
//     if (sortedArr.indexOf(i) == -1) {
//       let t = sortedArr.every((k) => k % i !== 0);
//       if (t == true) {
//         return i;
//       }
//     }
//   }
// }

// Best solution-------------------------------------
// function solution(arr) {
//   for (var n = 1; ; n++) if (arr.every((x) => x % n)) return n;
// }

console.log(solution([5, 8, 9, 13, 14]));
