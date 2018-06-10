function loadUser() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'user.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      const div = document.getElementById('user');
      div.innerHTML = `<span>User name: ${user.name}</span>`;

    } else {
      console.log(this.response);
    }
  };

  xhr.send();
}


document.getElementById('b1').addEventListener('click', loadUser);