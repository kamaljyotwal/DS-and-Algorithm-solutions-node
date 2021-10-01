// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// below is my wrong solution
// function commonCharacterCount(s1, s2) {
//   let res = [];
//   let arr1 = s1.split("");
//   let arr2 = s2.split("");
//   arr1.map((i) => (arr2.indexOf(i) != -1 ? arr1. :res.push(i) : null));
// //   arr2.map((i) => (arr1.indexOf(i) != -1 ? res.push(i) : null));

//   return res;
// }

function commonCharacterCount(s1, s2) {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "$");
  }
  return s2.replace(/[^$]/g, "").length;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
