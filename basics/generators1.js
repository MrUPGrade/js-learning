function* sayStuff() {
  for(let i = 0; i < 5; i++) {
    yield `Item ${i}`
  }
}

const gen1 = sayStuff();

console.log('Generator: ', gen1);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
