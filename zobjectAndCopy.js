// const originalObject = { a: 1, b: { c: 2 } };
// const copyA = originalObject;
// console.log(originalObject == copyA); // true, pointing to the same address in memory

// =====================================================
// const originalObject = { a: 1, b: { c: 2 } };
// const copy = JSON.parse(JSON.stringify(originalObject));
// console.log(originalObject == copy); // false, as new memory is assigned and values are copied because of deep copy by json.parse and stringify

//========================================================
// const originalObject = { a: 1, b: { c: 2 } };
// const copy = { ...originalObject };
// console.log(originalObject == copy)
// false, the spread operator ({...originalObject}) is a shallow copy, not a deep copy. It only creates a new object one level deep which is different in memory . If the properties of the original object are themselves objects, they will be the same objects in the new object, not new copies. originalObject.b.c = 10 will change the original object as well. or Copy.b.c ==10 will also reflect on originalObject

// =========================================================
// const originalObject = {
//   data: { a: 1, b: 2 },
//   method() {
//     console.log(`This is a method ${this.data.a}`);
//   },
// };
// const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
// console.log(deepCopyObject);
// The object will be copied but it does not preserve functions or methods because JSON does not support functions. When you stringify an object with JSON.stringify(), any functions are ignored. They are not part of the JSON standard, so they are not included in the stringified version of the object. When you parse this string back into an object with JSON.parse(), the functions or methods are not included in the new object.

// ========================================================
// recursive function to deep copy object
const originalObject = {
  data: { a: 1, b: 2 },
  method() {
    console.log(`This is a method ${this.data.a}`);
  },
};

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    console.log(key, "---key");
    newObj[key] = deepCopy(obj[key]);
  }
  return newObj;
}
const deepCopyObject = deepCopy(originalObject);
console.log(deepCopyObject);
