function getText() {
  fetch('test.txt')
    .then(function (response) {
      console.log(response);
      return response.text()
    })
    .then(function (data) {
      document.getElementById('result').innerHTML = data;
    })
}

document.getElementById('gettext').addEventListener('click', getText);