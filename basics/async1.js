async function dummyFunc() {
  return 'random text';
}

console.log(dummyFunc());

dummyFunc()
  .then((res) => console.log(res));