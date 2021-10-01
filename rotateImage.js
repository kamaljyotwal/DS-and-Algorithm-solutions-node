function rotateImage(a) {
  var newArr = [];
  var inner = [];

  for (let i = 0; i < a.length; i++) {
    inner = [];
    for (let j = 0; j < a.length; j++) {
      inner.push(a[j][i]);
    }
    newArr.push(inner.reverse());
  }
  return newArr;
}

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
