function hello(name = 'Anonymous') {
  console.log(`Hi ${name}!`);
}

hello();
hello('John');
hello(name='Smith');