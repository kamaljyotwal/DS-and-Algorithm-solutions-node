let nameObj = { firstName: "kamal", lastName: "kant" }

function printName(city, state, age, gender) {
    console.log(`${this.firstName} ${this.lastName} is from ${city}, ${state} & ${age}. He is ${gender}`)
}
let originalbind = printName.bind(nameObj, "delhi", "haryana")
// originalbind(28, "male")

Function.prototype.mybind = function (...args) {
    let f = this // getting access to the function in this line
    return function (...args2) {
        // console.log(args2)
        f.call(...args, ...args2)
    }
}

let duplicatebind = printName.mybind(nameObj, "delhi2", "haryana2")
duplicatebind(28, "male")
