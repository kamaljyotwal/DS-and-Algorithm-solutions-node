function solution(inputArray) {
  let std = inputArray.sort((a, b) => a - b);

  for (let i = 2; i < Infinity; i++) {
    if (std.indexOf(i) == -1) {
      let t = std.every((k) => k % i !== 0);
      if (t == true) {
        return i;
      }
    }
  }
}

// Best solution:
// function solution(arr) {
//   for(var n=1;;n++) if(arr.every(x=>x%n)) return n
// }

console.log(solution([5, 8, 9, 13, 14]));
