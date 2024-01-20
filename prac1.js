// multiple api calls with promise.all
function apiCall() {
    let arr = [1, 2, 3, 4, 5]
    const fetchPromises = arr.map(i => fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then(response => response.json()));
    // console.log(fetchPromises)

    Promise.all(fetchPromises)
        .then(responses => {
            console.log(responses)
        }).catch(error => console.error('Error fetching data:', error));

}
apiCall()

// deepCopy vs shallowCopy
// const originalObject = { a: 1, b: { c: 2 } };
// const Copy = JSON.parse(JSON.stringify(originalObject));
// // const Copy = { ...originalObject };

// console.log(originalObject)
// console.log(Copy)

// Copy.a = 3
// console.log(originalObject)
// console.log(Copy)

// Copy.b.c = 5;

// console.log(originalObject)
// console.log(Copy)