//Return the strings with most character
function allLongestStrings(inputArray) {
  let maxLength = Math.max(...inputArray.map((str) => str.length));
  let b = inputArray.filter((str) => str.length === maxLength);
  console.log(b);
}
console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));

// Approach 2----------------------------------------
// function allLongestStrings(inputArray) {
//   let a = inputArray.sort((a, b) => b.length - a.length);
//   let maxLength = a[0].length;
//   let b = a.filter((str) => str.length == maxLength);
//   console.log(b);
// }

// Approach 3----------------------------------------
// function allLongestStrings(inputArray) {
//   var result = [];
//   let prevCount = 0;
//   inputArray.map((i) => {
//     if (i.length >= prevCount) {
//       prevCount = i.length;
//       result.push(i);
//     }
//   });
//   const newres = result.filter((k) => k.length >= prevCount);
//   return newres;
// }
