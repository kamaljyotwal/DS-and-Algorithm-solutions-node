const movieAlbums = [
  { name: "Bobby Tarantino", rating: 5 },
  { name: "The Incredible True Story", rating: 4.5 },
  { name: "Supermarket", rating: 4.9 },
  { name: "Neon", rating: 4.2 },
  { name: "Under Pressure", rating: 5 },
];

let callbackFunc = (i) => i.rating < 4.5;
// let a = movieAlbums.filter(callbackFunc);
// console.log(a);

Array.prototype.myFilter = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError("callback must be a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && result.push(this[i]);
  }
  return result;
};

let b = movieAlbums.myFilter(callbackFunc);
console.log(b);
