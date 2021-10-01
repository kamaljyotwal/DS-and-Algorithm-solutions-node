function firstDuplicate(a) {
  const dups = new Set();

  for (const i in a) {
    if (dups.has(a[i])) {
      return Number(a[i]);
    }
    dups.add(a[i]);
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
