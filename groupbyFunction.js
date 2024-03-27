let products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Orange", category: "fruit" },
    { name: "Banana", category: "fruit" },
    { name: "Tomatoes", category: "vegetable" },
    { name: "Broccoli", category: "vegetable" },
];
// My custom function
function groupbyMe(arr) {
    let types = [...new Set(arr.map((i) => i.category))];
    let result = {}
    types.map(i => result[i] = [])
    // console.log(result)

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].category].push(arr[i])
    }
    return result
}
// Implementation by AI, efficient not little unreadable
function groupbyMe(arr) {
    return arr.reduce((result, item) => {
        (result[item.category] = result[item.category] || []).push(item);
        return result;
    }, {});
}

// AI implemented alternate approach without using reduce.
function groupBy(arr, key) {
    let result = {};
    arr.forEach(item => {
        const keyValue = item[key];
        result[keyValue] = result[keyValue] || [];
        result[keyValue].push(item);
    });
    return result;
}

console.log(groupBy(products, "category"))