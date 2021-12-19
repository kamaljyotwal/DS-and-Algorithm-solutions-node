function fibo(n) {
  let newArr = [1, 1];

  for (let i = 3; i <= n; i++) {
    newArr.push(newArr[newArr.length - 2] + newArr[newArr.length - 1]);
  }
  return newArr;
}

console.log(fibo(70));
