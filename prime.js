function prime(n) {
  if (isNaN(n) == true || isFinite(n) == false || n < 0) return false;
  if (n % 2 == 0) return false;
  if (n == 2 || n == 1) return true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(51));
