function pattern(num) {
    let char = "*"
    if (isNaN(num) || num % 2 == 0) return "Not valid";

    console.log(char.repeat(num))
    for (let i = 0; i < num; i++) {
        let a = Math.ceil(num / 2)
        console.log(`${" ".repeat(a - 1)}*`)
    }
    console.log(char.repeat(num))
}
console.log(pattern(5))

// output
// *****
//   *
//   *
//   *
//   *
//   *
// *****