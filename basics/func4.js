const hello1 = function (name) {
  console.log(`Hi ${name}!`)
};

function hello2(name) {
  console.log(`Hi ${name}!`)
}


hello1('Fred');
console.log('typeof =>', typeof hello1);
console.log('hello1 =>', hello1);

hello2('John');
console.log('typeof =>', typeof hello2);
console.log('hello2 =>', hello2);
