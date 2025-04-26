// Timeout's
// const _ = require('lodash');
// const logHi = () => console.log('Hi')
// const debouncedLogHi = _.debounce(logHi, 1500)
// debouncedLogHi()

// ------------------------------------------------------
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
// const object1 = { name: "John" };
// const object2 = { age: 30 };
// const combinedObject = { ...object1, ...object2};
// console.log(combinedObject)

// const baseObject = { name: "John", age: 30 };
// const updatedObject = { ...baseObject, age: 31 };
// console.log(updatedObject);

// const nestedObject = {
//   name: "John",
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };
// const shallowCopy = { ...nestedObject };
// console.log("Shallow Copy:", shallowCopy);

// -------------------------------------------------------
// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
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
// Polyfill for call,apply
// const myName = {
//   firstName: "kamal",
//   lastName: "kant",
// };
// function printName(city, country) {
//   console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
// }
// // printName.call(myName, "Delhi", "India");

// Function.prototype.myCall = function (context, ...args) {
//   // console.log(context, "context"); // this is the object
//   // console.log(this, "this"); // 'this' is the function
//   context.myFn = this;
//   // console.log(context, "con2");
//   context.myFn(...args);
// };
// printName.myCall(myName, "Palia", "India");

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
// console.log([...new Set(result)], '1st');

// // // 2nd approach
// // let finalResult = [];
// // result.forEach((i) => (finalResult.indexOf(i) == -1 ? finalResult.push(i) : null));
// // console.log(finalResult, '2nd')

// // A more optimsed alternative to 2nd approach
// let finalResult = [];

// let seen = {};  // Using object for O(1) lookup
// result.forEach(item => {
//     if (!seen[item]) {
//         seen[item] = true;
//         finalResult.push(item);
//     }
// });

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
// myPromise
//   .then((result) => {
//     console.log("Resolved:", result);
//   })
//   .catch((error) => {
//     console.error("Rejected:", error.message);
//   });

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
//   // Check if obj is valid object
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
//     console.log(i, "Var");
//   }, 1000 + i);
// }

// for (var i = 0; i < 3; i++) {
//     console.log(i, 'a');
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i, 'b');
// }

// ---------------------------------------------------------------------
// findOccurance();

// function findOccurance() {
//   var input = "kamal is good at sports, he is also good at acedemics";
//   let arr = input.split(" ");
//   let wordCount = {};

//   arr.forEach((word) => {
//     let cleanWord = word.toLowerCase().replace(",", "");
//     wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
//   });

//   // // Convert to array format if needed
//   // let result = [];
//   // for (let word in wordCount) {
//   //     result.push({
//   //         word: word,
//   //         count: wordCount[word]
//   //     });
//   // }

//   console.log("Word count object:", wordCount);
//   // console.log("Result array:", result);
// }


// let str = "12.34.11.172.155"

// function stringValidator(str) {
//   let arr = str.split(".").map(Number)
//   console.log(arr.length)

//   if (arr.length == 4) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 255 || arr[i] < 0) {
//         return false
//       }
//     }
//   } else {
//     return "Invalid"
//   }


// }
// stringValidator(str)

// ---------------------------------------------------------------------
// let input = [1, 2, 3, 4, 5, 6, 7, 8]
// k = 3
// // output = [3,2,1,6,5,4,8,7]

// function reverseSubArray(arr, k) {
//   let result = [];

//   // Process array in chunks of k
//   for (let i = 0; i < arr.length; i += k) {
//     // Take k elements, reverse them, and add to result
//     let chunk = arr.slice(i, i + k);
//     console.log(chunk)
//     // result.push(...chunk.reverse());
//   }

//   return result;
// }

// console.log(reverseSubArray(input, k));

// function to flatten an array
// let arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 14]]]

// function flattenArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     // check if inner array is an actual array
//     if (Array.isArray(arr[i])) {
//       result.push(...flattenArray(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result;
// }

// console.log(flattenArray(arr))

// =================================================
// flatten object
// var objWithArrays = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     country: 'USA'
//   }
// };


// function flattenObject(obj, parentKey = '', delimiter = '.') {
//   let result = {};
//   for (let key in obj) {
//     let newKey = parentKey ? parentKey + delimiter + key : key;

//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       result = { ...result, ...flattenObject(obj[key], newKey) };
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }
// console.log(flattenObject(objWithArrays))

// ================================================
// XSS and CSRF attack for interview
// polyfill for debouncer
// difference b/w debouncing and throttling