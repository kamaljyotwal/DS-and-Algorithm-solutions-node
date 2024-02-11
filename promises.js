// Multiple api calls with promise.all with .then()
function apiCall() {
    let arr = [1, 2, 3, 4, 5]
    const fetchPromises = arr.map(i => fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then(response => response.json()));
    // console.log(fetchPromises)

    Promise.all(fetchPromises)
        .then(responses => {
            console.log(responses)
        }).catch(error => console.error('Error fetching data:', error));

}
// calling the function
apiCall()


//=========================================================================
// Multiple api calls with promise.all with async await
async function multipleApi(...args) {
    let allnums = [...args]
    let b = allnums.map(async (i) => (await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)).json())
    let c = await Promise.all(b)
    console.log(c)

    // return customSort(d, "title")
}

console.log(multipleApi(4, 2, 1, 3))


// function customSort(arr1 = [], arr2) {
//     let res = arr1.sort((a, b) => a[arr2] - b[arr2])
//     // console.log(res)
// }


