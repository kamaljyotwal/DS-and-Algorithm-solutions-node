// function func1() {
//   console.log(this.length);
// }
// var obj = {
//   x: 5,
//   method: function (func) {
//     func();
//     arguments[0]();
//   },
// };
// obj.method(func1, 1);

// --------------------------------------------------------------
// class Info {
//   constructor(age) {
//     this.age = age;
//   }
//   print() {
//     return `age is ${this.age}`;
//   }
// }
// class Details extends Info {
//   constructor(name, age) {
//     super(age);
//     this.name = name;
//   }
//   details() {
//     return `name is ${this.name},` + " " + super.print();
//   }
// }
// var obj = new Details("kamal", 20);
// console.log(obj.details());

// --------------------------------------------------------------
// class Foo {
//   constructor(name) {
//     this.name = name;
//   }
//   getNameSeparator() {
//     return "-";
//   }
// }

// class FooBar extends Foo {
//   constructor(name, index) {
//     super(name);
//     this.index = index;
//   }
//   getFullName() {
//     return this.name + this.getNameSeparator() + this.index;
//   }
// }

// const firstFooBar = new FooBar("foo", 1);
// console.log(firstFooBar.getFullName());
// console.log(firstFooBar.name);

// ----------------------------------------------------------------
// let pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("got resolved");
//   }, 3000);
// console.log("loda lasun");
//   setTimeout(() => {
//     reject("rejected");
//   }, 2000);
// });

// pro
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

//--------------------------------------------------------------
// Promise.resolve().then(() => console.log(4));
// queueMicrotask(() => console.log(2));
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(1);
// new Promise(() => console.log(5));
// (async () => console.log(6))();

// --------------------------------------------------------------
// class Example {
//   #privateProperty = "kk";
//   constructor(value) {
//     this.#privateProperty = value;
//   }

//   getPrivateProperty() {
//     return this.#privateProperty;
//   }
//   setPrivateProperty(newValue) {
//     this.#privateProperty = newValue;
//   }
// }

// const instance = new Example("Initial Value");
// console.log(instance);
// console.log(instance.getPrivateProperty());
// console.log(instance.setPrivateProperty("kamal")); //undefined, bcoz it doesn't return anything, just setting value.
// console.log(instance.getPrivateProperty());

// ----------------------------------------------------------------
// class Parent {
//   constructor(nme) {
//     this.name = nme;
//   }
// }

// class Child extends Parent {
//   constructor(nme, age) {
//     super(nme); // Correctly calls the parent class constructor
//     this.age = age;
//   }
// }

// const a = new Parent("kamal", 29);
// console.log(a);
// const b = new Child("ck", 50);
// console.log(b);

// ----------------------------------------------------------------
// var date = new Date();
// console.log(date.toDateString())
// date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); // 1 week in milliseconds
// console.log(date.toDateString())

// ----------------------------------------------------------------
// console.log(this);
// console.log(global);
// function n() {
//   console.log(this);
// }
// n();

// -----------------------------------------------------------------
// function myFunc(a, b, c) {
//   return [a, b, c, a, b, c];
// }

// let result1 = myFunc.length;
// console.log(result1);

// let result2 = myFunc(1, 2, 3, 4, 4, 44, 4, 4, 4, 4).length;
// console.log(result2);

// ----------------
setImmediate(() => console.log("setImmediate"))
process.nextTick(() => console.log("nextTick"))
