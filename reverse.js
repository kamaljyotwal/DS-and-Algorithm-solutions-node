function reverseInParentheses(input) {
  var somet = [];
  var flag = false;

  for (let i = 0; i < input.length; i++) {
    input[i] == "(" ? (flag = true) : null;

    if (flag) {
      input[i] == ")" ? (flag = false) : null;
      somet.push(input[i]);
    }
  }
  return somet.reverse().join("");
}

console.log(reverseInParentheses("foo(bar)baz(blim)"));

// var replacement = [];

// for (let i = 0; i < inputString.length; i++) {
//   if ((inputString[i] == "(") | (inputString[i] == ")")) {
//     replacement.push(i);
//   }
// }

// console.log(replacement);

// var nya = inputString.slice(replacement[0], replacement[1] + 1);
// console.log(nya);
// var replaceStr = nya.replace("(", "").replace(")", "").split("").reverse().join("");
// return (
//   inputString.slice(inputString[0], replacement[0]) +
//   replaceStr +
//   inputString.slice(replacement[1] + 1, inputString.length)
// );
