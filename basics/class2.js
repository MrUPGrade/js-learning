class User {
  constructor(name) {
    this.name = name;
    this.joinDate = Date.now();
  }

  welcome() {
    return `Hi! I'm ${this.name}`;
  }
}

class Customer extends User {
  constructor(name, membership = 'standard') {
    super(name);
    this.membership = membership;
  }

  static accountCost() {
    return 100;
  }
}

const u = new User('Edgar');

console.log(u);
console.log(u.welcome());

const c = new Customer('John');

console.log(c);
console.log(c.welcome());

console.log(Customer.accountCost());