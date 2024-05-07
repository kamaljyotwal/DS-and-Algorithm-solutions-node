// Best approach (for understanding)------------------------------
function stringToObject(str, finalValue) {
  const keys = str.split(".");
  let result = finalValue;
  for (let i = keys.length - 1; i >= 0; i--) {
    result = { [keys[i]]: result };
  }
  return result;
}
console.log(stringToObject("a.b.c", "someValue"));

// approach 2 ----------------------------------------------------
function stringToObject(str, finalValue) {
  const keys = str.split(".");
  let b = keys.reduceRight((value, key) => ({ [key]: value }), finalValue);
  console.log(b);
}

// approach 3----------------------------------------------------------------
function stringToObject(str, finalValue) {
  const keys = str.split(".");
  let result = {};
  let temp = result;
  for (let i = 0; i < keys.length; i++) {
    temp[keys[i]] = i === keys.length - 1 ? finalValue : {};
    temp = temp[keys[i]];
  }
  return result;
}
