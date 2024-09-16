// curry function.
// function multiply(param1) {
//   return function innerFunc(param2) {
//     return param1 * param2;
//   };
// }
// console.log(multiply(6)(5));

// ---------------------------------------------------------------------
// function* generatorFunc() {
//   yield 1;
//   yield "k";
//   yield 3;
// }

// const iterator = generatorFunc();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ---------------------------------------------------------------------

function findFirstNonRepeating(arr) {
  const charCount = new Map();
  // Count occurrences of characters and store in map
  for (let char of arr) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  // Find the first non-repeating character
  for (let [char, count] of charCount) {
    if (count === 1) {
      return char;
    }
  }
  // If no non-repeating character found, return "not found"
  return "not found";
}
//console.log(findFirstNonRepeating([3, 4, 4, 3, 2, 4])); // Output: 2
// console.log(findFirstNonRepeating([1, 1, 2, 2, 3, 3]));
// ---------------------------------------------------------------------

// too over-complicated, will redo---------
// function letterCombinations(number) {
//   const result = [];
//   generateCombinations("", number);

//   function generateCombinations(prefix, suffix) {
//     if (suffix.length === 0) {
//       result.push(prefix);
//       return;
//     }
//     const firstDigit = suffix.charAt(0);
//     const firstLetter = String.fromCharCode(parseInt(firstDigit) + 96);
//     console.log(firstLetter);
//     generateCombinations(prefix + firstLetter, suffix.slice(1));

//     if (suffix.length >= 2 && parseInt(suffix.slice(0, 2)) <= 26) {
//       const secondLetter = String.fromCharCode(parseInt(suffix.slice(0, 2)) + 96);
//       generateCombinations(prefix + secondLetter, suffix.slice(2));
//     }
//   }

//   return result;
// }
// console.log(letterCombinations("123")); // Output: ["abc", "aw", "lc"]
// ---------------------------------------------------------------------
