function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(`Hi! It's me ${this.name}!`)
};

function Customer(name, membership) {
  User.call(this, name);

  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

const u = new User('Stefan');
console.log(u);
u.sayHi();

const c = new Customer('John', 'VIP');
console.log(c);
c.sayHi();
