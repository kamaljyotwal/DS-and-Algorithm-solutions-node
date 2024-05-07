// *****
//   *
//   *
//   *
//   *
//   *
// *****
// Best Approach--------------------------------------------------------
function drawStarPattern(n = 5) {
  console.log("*".repeat(n));
  console.log([...Array(n)].map(() => " ".repeat(Math.floor(n / 2)) + "*").join("\n"));
  console.log("*".repeat(n));
}
drawStarPattern(5);

// Approach 2------------------------------------------------------------
// function drawStarPattern(num) {
//   let char = "*";
//   if (isNaN(num) || num % 2 == 0) return "Not valid";

//   console.log(char.repeat(num));
//   for (let i = 0; i < num; i++) {
//     let a = Math.ceil(num / 2);
//     console.log(`${" ".repeat(a - 1)}*`);
//   }
//   console.log(char.repeat(num));
// }

//Approach 3-------------------------------------------------------------
// function drawStarPattern() {
//   const n = 5; // Number of stars in the top and bottom rows
//   const height = 7; // Total number of rows

//   // Top row of stars
//   let row = "";
//   for (let i = 0; i < n; i++) {
//     row += "*";
//   }
//   console.log(row);

//   // Middle rows with stars forming the vertical line
//   for (let i = 1; i < height - 1; i++) {
//     row = "";
//     for (let j = 0; j < n; j++) {
//       if (j === Math.floor(n / 2)) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }

//   // Bottom row of stars
//   row = "";
//   for (let i = 0; i < n; i++) {
//     row += "*";
//   }
//   console.log(row);
// }
