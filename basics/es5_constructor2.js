function User(name='Anonymous') {
  this.name = name;
  console.log(this);
}

console.log('Create user');
const u1 = new User('John');
const u2 = new User('Fred');

console.log(u1, u2);
