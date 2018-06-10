const hello1 = function () {
  console.log('Hi from normal function !');
};

const hello2 = () => {
  console.log('Hi from arrow function !');

};

const hello3 = () => console.log('Hello from short arrow function!');

hello1();
console.log(hello1);
hello2();
console.log(hello2);
hello3();
console.log(hello3);
