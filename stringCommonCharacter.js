// Given two strings, find the number of common characters between them. For "aabcc" and "adcaa", the output should be 3,strings have 3 common characters - 2 "a"s and 1 "c".
// Best approach
function commonCharacterCount(str1, str2) {
  const charFreq1 = {};
  for (const char of str1) {
    charFreq1[char] = (charFreq1[char] || 0) + 1;
  }
  const commonChars = [];

  for (const char of str2) {
    if (charFreq1[char]) {
      commonChars.push(char);
      charFreq1[char]--;
    }
  }
  return commonChars;
}
console.log(commonCharacterCount("aabcc", "adcaa"));
// ----------------------------------------------------------------
// Approach 2
// function commonCharacterCount(s1, s2) {
//   const set1 = new Set(s1);
//   const set2 = new Set(s2);
//   console.log(set1, set2);
//   const commonChars = [...set1].filter((char) => set2.has(char));
//   return commonChars;
// }
// ----------------------------------------------------------------
// Approach 3
// function commonCharacterCount(s1, s2) {
//   for (var i = 0; i < s1.length; i++) {
//     s2 = s2.replace(s1[i], "$");
//   }
//   return s2.replace(/[^$]/g, "").length;
// }
