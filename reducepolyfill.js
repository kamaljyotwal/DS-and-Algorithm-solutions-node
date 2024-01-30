let arr = [1, 2, 3, 4, 5]
let inner = (acc, i) => acc + i;

Array.prototype.reducepolyfill = function (fn, initial) {
    let accumulator = initial;

    for (let i = 0; i < this.length; i++) {
        if (accumulator) {
            accumulator = fn.call(undefined, accumulator, this[i], i, this);
            // console.log(accumulator,"acc2")
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

let b = arr.reducepolyfill(inner)
console.log(b)

let a = arr.reduce(inner)
console.log(a)