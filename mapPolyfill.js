const arr = [1, 2, 3, 4, 5]

let inner = i => i + 5

const a = arr.map(inner)
// console.log(a)

Array.prototype.mapPolyfill = function (fn) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i]))
    }
    return result
}

const b = arr.mapPolyfill(inner)
console.log(b)