// let arr = ["1", 2, "1", "3", 4, "str", 6, "str2"];
// function multiply(param1) {
//   return function innerFunc(param2) {
//     return param1 * param2;
//   };
// }
// console.log(multiply(6)(5));
// ---------------------------------------------------------------------
// function* generatorFunction() {
//   yield 1;
//   yield "k";
//   yield 3;
// }

// const iterator = generatorFunction();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ---------------------------------------------------------------------
function letterCombinations(number) {
  const result = [];
  function generateCombinations(prefix, suffix) {
    if (suffix.length === 0) {
      result.push(prefix);
      return;
    }
    const firstDigit = suffix.charAt(0);
    const firstLetter = String.fromCharCode(parseInt(firstDigit) + 96);
    console.log(firstLetter);
    generateCombinations(prefix + firstLetter, suffix.slice(1));

    if (suffix.length >= 2 && parseInt(suffix.slice(0, 2)) <= 26) {
      const secondLetter = String.fromCharCode(parseInt(suffix.slice(0, 2)) + 96);
      generateCombinations(prefix + secondLetter, suffix.slice(2));
    }
  }
  generateCombinations("", number);
  return result;
}

// console.log(letterCombinations("123")); // Output: ["abc", "aw", "lc"]
// ---------------------------------------------------------------------

// function findFirstNonRepeating(arr) {
//   const charCount = new Map();
//   // Count occurrences of each character
//   for (let char of arr) {
//     // console.log(char, 'char')
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }

//   // Find the first non-repeating character
//   for (let char of arr) {
//     if (charCount.get(char) === 1) {
//       return char;
//     }
//   }
//   // If no non-repeating character found, return "not found"
//   return "not found";
// }

// // Test cases
// console.log(findFirstNonRepeating([3, 4, 4, 3, 2, 4])); // Output: 1
// console.log(findFirstNonRepeating([1, 1, 2, 2, 3, 3]));
