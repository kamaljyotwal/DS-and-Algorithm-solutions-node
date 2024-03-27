// Doing multiple API calls with dynamic URL using promise.all with .then method chaining
function apiCall() {
    let arr = [1, 2, 3, 4, 5]
    const fetchPromises = arr.map(i => fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then(response => response.json()));
    // console.log(fetchPromises)

    Promise.all(fetchPromises)
        .then(responses => {
            console.log(responses)
        }).catch(error => console.error('Error fetching data:', error));

}
// apiCall()

//=========================================================================
// Multiple api calls with promise.all and async await syntax
async function multipleApi(...args) {
    let allnums = [...args]
    let b = allnums.map(async (i) => (await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)).json())
    let c = await Promise.all(b)
    // console.log(c)
    // return customSort(d, "title")
}

// AI suggestion
// Refactored the function to use more descriptive variable names and removed the console.log statement for better readability.
async function multipleApi(...todoIds) {
    const apiCalls = todoIds.map(async (id) => (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json());
    const responses = await Promise.all(apiCalls);
    console.log("responses")
    return responses;
}

console.log(multipleApi(4, 2, 1, 3))

// function customSort(arr1 = [], arr2) {
//     let res = arr1.sort((a, b) => a[arr2] - b[arr2])
//     // console.log(res)
// }

// Chatgpt way of doing same, with handling network error
// async function fetchTodoData(todoId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch data for todo ID ${todoId}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         return null; // Return null for failed requests
//     }
// }

// async function multipleApi(...todoIds) {
//     try {
//         const promises = todoIds.map(fetchTodoData);
//         const todoData = await Promise.all(promises);
//         console.log(todoData);
//         // return customSort(todoData, "title");
//     } catch (error) {
//         console.error('An error occurred:', error);
//         // Handle or propagate the error as needed
//     }
// }