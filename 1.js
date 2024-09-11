// Timeout's
// const _ = require('lodash');
// const logHi = () => console.log('Hi')
// const debouncedLogHi = _.debounce(logHi, 1500)

// debouncedLogHi()
// debouncedLogHi()
// debouncedLogHi()

// -------------------------------------------------
// const timeoutId1 = setTimeout(() => {
//   console.log("Timeout 1 executed");
// }, 1000);

// const timeoutId2 = setTimeout(() => {
//   console.log("Timeout 2 executed");
// }, 2000);

// console.log(timeoutId1._idleTimeout);
// console.log(timeoutId2._idleTimeout);

// ------------------------------------------------------
// function randomFunc() {
//   console.log("some");
//   setTimeout(() => {
//     console.log("timeout");
//   }, 0);
//   console.log("last");
// }
// randomFunc();

// -------------------------------------------------------
// console.log((0.1 + 0.2).toFixed(3))
// console.log((0.1 + 0.2))
// -------------------------------------------------------

// var k = 12345;
// var l = [...String(k)].map(Number);
// console.log(l)
// -------------------------------------------------------

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
// console.log(me)
// me.name = "Ankit";
// console.log(me)
// me.printIntroduction();

// ----------------------------------------------------------------------
// closure
// function outerFunction() {
//   let counter = 0;
//   return function innerFunction() {
//     counter++;
//     return counter;
//   };
// }

// console.log(outerFunction()());
// const incrementCounter = outerFunction();
// console.log(incrementCounter())
// console.log(incrementCounter())

// -----------------------------------------------------------------------
// currying
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));
// console.log(makeAdder(5)(5));

// -----------------------------------------------------------------------
// const myName = {
//   firstName: "kamal",
//   lastName: "kant",
// };
// function printName(city, country) {
//   console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
// }
// // printName.call(myName, "Palia", "India");

// // custom call method
// Function.prototype.myCall = function (context, ...args) {
//   // console.log(context, "con"); // this is the object
//   // console.log(this, "this"); // 'this' is the function
//   context.myFn = this;
//   // console.log(context, "con2");
//   context.myFn(...args);
// };
// // printName.myCall(myName, "Palia", "India");

// // custom apply method
// Function.prototype.myApply = function (context, args) {
//   context.myFn = this;
//   context.myFn(...args);
// }
// printName.myApply(myName, ["Palia", "India"]);

// -----------------------------------------------------------------------
// let a = [1, 2, 2, 3];
// let b = [2, 4, 5];
// let result = [...a, ...b];

// // 1st approach
// console.log([...new Set(result)], '1st');

// // 2nd approach
// let finalResult = [];
// result.forEach((i) => (finalResult.indexOf(i) == -1 ? finalResult.push(i) : null));
// console.log(finalResult, '2nd')

//------------------------------------------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Operation completed successfully");
//     } else {
//       reject(new Error("Operation failed"));
//     }
//   }, 1000);
// });
// console.log(typeof myPromise)

// // calling with .then and .catch
// // myPromise
// //   .then((result) => {
// //     console.log("Resolved:", result);
// //   })
// //   .catch((error) => {
// //     console.error("Rejected:", error.message);
// //   });

// // calling with async and await
// async function handlePromise() {
//     try {
//         const result = await myPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// handlePromise()

// ----------------------------------------------------------------------
// const originalObj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
//   c: undefined,
//   d: () => {
//     console.log("Function inside object");
//   },
// };
// const clone = deepCopy(originalObj);
// // console.log(clone);

// function deepCopy(obj) {
//   // Check if obj is null or not an object
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   // Create an empty object to store result
//   const newObj = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     // console.log(key, obj[key])
//     // Recursively deep copy each property
//     newObj[key] = deepCopy(obj[key]);
//   }
//   return newObj;
// }

// ---------------------------------------------------------------------
// const a = new Array(10);
// console.log(a)
// console.log(a.length);

// ---------------------------------------------------------------------
// function person(firstName, lastName) {
//   return {
//     first: firstName,
//     last: lastName,
//   };
// };
// console.log(person("kamal", "kant"));

// ---------------------------------------------------------------------
// rewrite a better example here
// function* gen1() {
//   yield 11;
//   yield 22;
//   yield 33;
// }
// const iterator = gen1();
// console.log(iterator.next("a").value);
// console.log(iterator.next("b").value);
// console.log(iterator.next("c").value);

// ---------------------------------------------------------------------
// "use strict";
// let green;
// grnee = false
// grnee = "red"
// console.log(grnee)

// ---------------------------------------------------------------------
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i);
// }

// for (var i = 0; i < 3; i++) {
//     console.log(i, 'a');
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i, 'b');
// }
// ---------------------------------------------------------------------
