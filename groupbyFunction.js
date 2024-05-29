let products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Orange", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Tomatoes", category: "vegetable" },
  { name: "Broccoli", category: "vegetable" },
];
// My function
// function groupbyMe(arr) {
//   let a = arr.map((i) => i.category);
//   let types = [...new Set(a)];
//   let result = {};
//   types.map((i) => (result[i] = []));
//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i].category].push(arr[i]);
//   }
//   return result;
// }
// console.log(groupbyMe(products));
// --------------------------------------------------------------
// Implementation by AI, efficient but little unreadable
// function groupbyMe(arr) {
//   return arr.reduce((result, item) => {
//     (result[item.category] = result[item.category] || []).push(item);
//     return result;
//   }, {});
// }
// --------------------------------------------------------------
// AI implemented alternate approach without using reduce.
function groupBy(arr, key) {
  let result = {};
  arr.forEach((item) => {
    console.log(item[key]);

    const keyValue = item[key];
    result[keyValue] = result[keyValue] || [];
    result[keyValue].push(item);
  });
  return result;
}

console.log(groupBy(products, "category"));
