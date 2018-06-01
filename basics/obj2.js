const todo = {
  _list: Array(),

  add: function (action) {
    if (typeof action !== 'undefined') {
      this._list.push(action)
    } else {
      console.log('Adding BS!')
    }
  },

  printAll: function () {
    this._list.forEach(function (todo, idx) {
      console.log(`${idx}: ${todo}`);
    });
  }
};

todo.printCount = function () {
  console.log(`ToDo count: ${this._list.length}`);
};


todo.add('eat icecream');
todo.add('shop for food');

todo.printAll();
todo.printCount();
