//returning the elements with the maximum string length
function allLongestStrings(inputArray) {
  // var result = [];
  // let prevCount = 0;
  // inputArray.map((i) => {
  //   if (i.length >= prevCount) {
  //     prevCount = i.length;
  //     result.push(i);
  //   }
  // });
  // const newres = result.filter((k) => k.length >= prevCount);
  // return newres;
  // ----------------------------
  // Alternate 1
  // let a = inputArray.sort((a, b) => b.length - a.length);
  // let maxLength = a[0].length;
  // let b = a.filter((str) => str.length == maxLength);
  // console.log(b);
  // ----------------------------
  // Alternate 2
  let maxLength = Math.max(...inputArray.map((str) => str.length));
  let b = inputArray.filter((str) => str.length === maxLength);
  console.log(b);
}

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
