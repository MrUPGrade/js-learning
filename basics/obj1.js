const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,

  address: {
    country: 'PL',
    street: 'Nice one'
  },

  getBirthYear: function () {
    const d = new Date();

    return d.getFullYear() - this.age;
  }
};

console.log(user);

console.log(user.firstName);
console.log(user['firstName']);
console.log(user.getBirthYear());
console.log(user.address);
