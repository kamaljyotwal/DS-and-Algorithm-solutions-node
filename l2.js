let a = {
  key1: "kamal",
  key2: "28",
  key3: (a, b) => a + b,
};

function createCopy(a) {
  let b = { ...a };
  return b;
}
let c = createCopy(a);
console.log(c.key3(2, 5));
