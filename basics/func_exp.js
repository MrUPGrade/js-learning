const hello = function (name = 'Anonymous') {
  console.log(`Hi ${name}!`);
};

hello();
hello('John');