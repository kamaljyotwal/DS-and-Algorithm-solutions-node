function solution(inputString) {
  return (
    inputString
      .split("")
      .sort()
      .join("")
      .replace(/(\w)\1/g, "").length < 2
  );
}

console.log(solution("abbcbba"));
// abbcbba
