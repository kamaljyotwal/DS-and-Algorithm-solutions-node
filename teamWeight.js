function alternatingSums(a) {
  var teamA = 0;
  var teamB = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      teamA += a[i];
    } else {
      teamB += a[i];
    }
  }

  return [teamA, teamB];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
