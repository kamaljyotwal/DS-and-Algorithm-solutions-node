function firstNotRepeatingCharacter(s) {
  var sorted = Array.from(s).sort();
  let res = [];
  var answer = "";

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
      res.push(sorted[i]);
      // console.log(`in-loop= ${res}`);
    }
  }

  for (const j in s) {
    if (res.includes(s[j])) {
      answer = s[j];
      break;
    }
  }
  return res.length == 0 ? "_" : answer;
}

console.log(firstNotRepeatingCharacter("ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof"));

// can also do if index of is equal to last index of inside the loopin over array
