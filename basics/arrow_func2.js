const name = 'John';

// Ignores the name variable. It creates scope for params.
const getHello = (name) => `Hello ${name}`;

console.log(getHello('Stefan'));
console.log(getHello(name));
