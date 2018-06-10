class User {
  constructor(name) {
    this.name = name
  }
}

const users = [
  new User('John'),
  new User('Edgar')
];

document.getElementById('debug1').addEventListener('click', function () {
  console.log(users);
});

function createUser(userName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      users.push(new User(userName));
      resolve()
    }, 2000);
  });
}

function showUsers() {
  setTimeout(function () {
    let output = '';

    users.forEach(function (user) {
      output += `<li>User: ${user.name}</li>`;
    });

    document.getElementById('users').innerHTML = output;
  }, 1000)
}

createUser().then(showUsers);
