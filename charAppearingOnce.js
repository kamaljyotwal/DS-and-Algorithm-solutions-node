function findDuplicates(arr) {
  let result;
  // Easiest Approach
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
  //     result = arr[i];
  //   }
  // }
  // return result;

  // Approach 2
  // let a = arr.sort((a, b) => a - b);
  // // console.log(a)
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] != a[i - 1] && a[i] != a[i + 1]) {
  //     result = a[i];
  //   }
  // }
  // return result;
}
console.log(findDuplicates([1, 11, 221, 2, 7, 11, 2, 1, 7]));
