function addBorder(picture) {
  var newArr = [];
  var res = picture[0].length + 2;
  var boundry = ["*".repeat(res)];

  for (let i = 0; i < picture.length; i++) {
    newArr.push(`*${picture[i]}*`);
  }
  return [boundry, ...newArr, boundry];
}

console.log(addBorder(["abc", "ded"]));
