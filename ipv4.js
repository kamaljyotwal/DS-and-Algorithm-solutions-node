function solution(inputString) {
  let r = inputString.split(".");
  console.log(r);
  let res = r.every((i) => i != "" && !isNaN(i) && i > 0 && i < 256);

  // console.log(res);
  return res
}

console.log(solution("01.233.161.131"));
