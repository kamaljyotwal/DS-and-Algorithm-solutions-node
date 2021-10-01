// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  let res = Array.from(String(n));
  let arr = res.slice(0, res.length / 2);
  let arr2 = res.slice(res.length / 2, res.length);

  return arr.reduce((acc, i) => (acc = acc + Number(i)), 0) ===
    arr2.reduce((acc, i) => (acc = acc + Number(i)), 0)
    ? true
    : false;
}

console.log(isLucky(11140052));
