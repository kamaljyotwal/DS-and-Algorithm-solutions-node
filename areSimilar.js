function areSimilar(a, b) {
  let changeArr = [];

  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[j]) {
      changeArr.push([a[j], b[j]]);
    }
  }

  if (changeArr.length >= 3) {
    return false;
  } else if (changeArr.length >= 2) {
    let sortA = a.sort((a, b) => a - b);
    let sortB = b.sort((a, b) => a - b);
    for (let i = 0; i < sortA.length; i++) {
      if (sortA[i] !== sortB[i]) {
        return false;
        break;
      }
    }
  }
  return true;
}
