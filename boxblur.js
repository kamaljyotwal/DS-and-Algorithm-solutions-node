solution = (I) => {
  //Slice off the border
  var B = I.slice(1, -1).map((e) => e.slice(1, -1));

  //Replace every element with the average of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0;
      for (var x = 0; x < 3; ++x) for (var y = 0; y < 3; ++y) sum += I[i + x][j + y];
      return (sum / 9) | 0;
    })
  );
};

console.log(
  solution([
    [36, 0, 18, 9, 9, 45, 27],
    [27, 0, 254, 9, 0, 63, 90],
    [81, 255, 72, 45, 18, 27, 0],
    [0, 0, 9, 81, 27, 18, 45],
    [45, 45, 227, 227, 90, 81, 72],
    [45, 18, 9, 255, 9, 18, 45],
    [27, 81, 36, 127, 255, 72, 81],
  ])
);
