let products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Orange", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Tomatoes", category: "vegetable" },
  { name: "Broccoli", category: "vegetable" },
];

// My Approach-----------------------------------------------
// function groupbyMe(arr) {
//   // let a = arr.map((i) => i.category);
//   // let uniqueTypes = [...new Set(a)];
//   // console.log(uniqueTypes);

//   let uniqueTypes = arr.reduce((acc, i) => {
//     !acc.includes(i.category) && acc.push(i.category);
//     return acc;
//   }, []);
//   // console.log(uniqueTypes);

//   let result = {};
//   uniqueTypes.map((i) => (result[i] = []));
//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i].category].push(arr[i]);
//   }
//   return result;
// }
// console.log(groupbyMe(products));

// --------------------------------------------------------------
// Implementation by AI, efficient but little unreadable
function groupbyMe(arr) {
  return arr.reduce((result, i) => {
    (result[i.category] = result[i.category] || []).push(i);
    return result;
  }, {});
}

// --------------------------------------------------------------
// AI implemented alternate approach without using reduce.
// function groupBy(arr, key) {
//   let result = {};
//   arr.forEach((item) => {
//     console.log(item[key]);

//     const keyValue = item[key];
//     result[keyValue] = result[keyValue] || [];
//     result[keyValue].push(item);
//   });
//   return result;
// }

// console.log(groupBy(products, "category"));
