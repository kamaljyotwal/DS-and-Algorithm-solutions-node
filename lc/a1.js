var getConcatenation = function (arr) {
    let a= [...arr,...arr]
    return a
};

console.log(getConcatenation([1, 2, 1]))