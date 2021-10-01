const buffer = require("buffer");
var coo = Buffer.from("something big", "utf-8");

console.log(coo.toString("utf-8"));
console.log(coo.toString("hex"));
