class User {
  constructor(name) {
    this.name = name;
    this.joinDate = Date.now();
  }

  welcome() {
    return `Hi! I'm ${this.name}`;
  }
}


const u = new User('Edgar');

console.log(u);
console.log(u.welcome());