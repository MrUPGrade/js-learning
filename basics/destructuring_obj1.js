obj = {
  val1: 'test 1',
  val2: 'test 2',
  val3: 'test 3',
  val4: 'test 4'
};


let val1, x, rest;

// Names need to match
({val1, x, ...rest } = obj);

console.log(val1);
console.log(x);
console.log(rest);
