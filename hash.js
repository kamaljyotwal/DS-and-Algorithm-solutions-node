const crypto = require("crypto");

// const some = crypto.createHash("sha256");
// const very = some.update("something");
// const wow = very.digest("hex");
// // console.log(wow);

// // const something = crypto.randomBytes(20).toString("hex");
// // console.log(something);
// console.log(wow)

const check = crypto
  .createHash("sha256")
  .update("7662016f14bd79519260385dce69755daaabde5a")
  .digest("hex");

console.log(check);
