let products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Orange", category: "fruit" },
    { name: "Banana", category: "fruit" },
    { name: "Tomatoes", category: "vegetable" },
    { name: "Broccoli", category: "vegetable" },
];

function groupbyMe(arr) {
    let types = Array.from(new Set(arr.map((i) => i.category)));
    // console.log(types)
    let result = {}
    types.map(i => result[i] = [])
    // console.log(result)

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].category].push(arr[i])
    }
    return result
}
console.log(groupbyMe(products))