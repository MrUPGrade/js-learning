const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

for(let x in user) {
  console.log(`user.${x} => ${user[x]}`);
}
