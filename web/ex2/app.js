function User(name='Anonymous') {
  this.name = name;
}

console.log(Object.prototype);
console.log(User.prototype);

const u = User('Stefan');
console.log(User.__proto__);