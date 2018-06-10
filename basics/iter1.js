function simpleIterator(arr) {
  let nextIdx = 0;

  return {
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

console.log('Manual iteration');

usersIter = simpleIterator(users);
console.log(usersIter.next());
console.log(usersIter.next());
console.log(usersIter.next());
console.log(usersIter.next());
console.log(usersIter.next());
console.log(usersIter.next());
