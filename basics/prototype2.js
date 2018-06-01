function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(`Hi! It's me ${this.name}!`)
};


console.log(Object.prototype);
console.log(User.prototype);

const u = new User('Stefan');
u.sayHi();
