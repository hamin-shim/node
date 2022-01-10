function hello() {
  console.log(this);
}
hello();
class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log(this);
    console.log(this === global);
  }
}
const a = new A(1);
a.memberFunction();
console.log(this === module.exports);
