function allLongestStrings(inputArray) {
  var result = [];
  let prevCount = 0;

  inputArray.map((i) => {
    if (i.length >= prevCount) {
      prevCount = i.length;
      result.push(i);
    }
  });
  const newres = result.filter((k) => k.length >= prevCount);

  return newres;
}

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
