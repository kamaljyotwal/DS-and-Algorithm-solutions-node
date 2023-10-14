const a = [
    { userRole: "User role invalid" },
    { name: "Name must be between 3 and 100 character" }];

var some = a.map((i) => Object.keys(i)).flat();
console.log(some);
