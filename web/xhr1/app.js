function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt');

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log(this.response);
    }
  };

  xhr.send();
}


document.getElementById('b1').addEventListener('click', loadData);