// Sort all element(people) in given array while keeping the -1(tree) at the same index
function sortByHeight(arr) {
  // Extract the trees (represented by -1) and sort the people's heights
  const sortedHeights = arr.filter((height) => height !== -1).sort((a, b) => a - b);
  // Map the sorted people's heights back into the original array
  let final = arr.map((height) => (height === -1 ? -1 : sortedHeights.shift()));
  return final;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// Approach 2 (this was done 3yrs ago)--------------------------------------
function sortByHeight(arr) {
  const treePositions = [];
  //Pushing every index where element is -1 in input array
  for (let i = 0; i < arr.length; i++) {
    arr[i] == -1 && treePositions.push(i);
  }
  // ruturn original if all elements are tree
  if (treePositions.length == arr.length) {
    return arr;
  } else {
    // sort non-tree elements
    let newarr = arr.sort((a, b) => a - b).filter((i) => i != -1);
    // Check if this position was a tree position, then splice(put -1 in that position)
    for (let j = 0; j <= newarr.length; j++) {
      if (treePositions.includes(j)) {
        newarr.splice(j, 0, -1);
      }
    }
    return newarr;
  }
}
// console.log(
//   sortByHeight([
//     44, 36, 35, 78, 70, 92, 60, 17, 67, -1, 91, -1, 69, 54, 88, 58, 9, 90, 9, 12, 66, 21, 79, 99,
//     -1, 18, 46, 78, 38, 15, 26, 82, -1, 65, -1, 44, 51, 3, 37, 60, -1, 59, -1, -1, 78, 97, 9, 90,
//     24, 75, 45, 65, 24, 87, 44, 100, 94, 98, -1, 97, 72, 50, -1, 50, 39, 70, 91, 25, 66, 79, 69, 46,
//     20, 99, 57, 34, 42, 84, 8, -1, 95, 5, 59, 98, 97, 36, 89, 4, -1, 29, 9, 97, 55, 30, 16, -1, -1,
//     -1, 10, -1,
//   ])
// );
