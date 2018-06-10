function simpleIterator(arr) {
  let nextIdx = 0;

  return {
    // This is called on X of iterator
    [Symbol.iterator]() {
      return this;
    },

    next: function () {
      if (nextIdx < arr.length) {
        return {
          value: arr[nextIdx++],
          done: false
        };
      } else {
        return {
          done: true
        }
      }
    }
  }
}

const users = ['John', 'Stefan', 'Edgar'];


console.log('for of iterator');

userIter2 = simpleIterator(users);
for (let u of userIter2) {
  console.log(u)
}
