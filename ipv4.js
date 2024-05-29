function solution(inputString) {
  let r = inputString.split(".");
  let res = r.length == 4 && r.every((i) => i != "" && !isNaN(i) && i >= 0 && i < 256);
  // console.log(res);
  return res;
}

// console.log(solution("172.16.254.1"))
// solution("172.316.254.1")
// solution(".254.255.0")
// console.log(solution("1"))
// console.log(solution("10.254.255.20"))
