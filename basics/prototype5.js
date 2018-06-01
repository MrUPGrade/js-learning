const userPrototypes  = {
  greeting: function () {
    return `Hi! ${this.name}`;
  }
};

const fred = Object.create(userPrototypes);

console.log(fred);

fred.name = 'Fred';
console.log(fred.greeting());


const john = Object.create(userPrototypes, {
  name: {value: 'John'}
});

console.log(john);
console.log(john.greeting());