class NameIntro {
  constructor(firstName, lastName) {
    this.fN = firstName;
    this.lN = lastName;
  }
  nameLogger() {
    return `My name is ${this.fN} ${this.lN}`;
  }
}

let a = new NameIntro("kk", "jyotwal");
console.log(a, "a");
console.log(a.nameLogger());
