const name = 'John';
const age = 30;

function wtf() {
  return 123;
}

html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Func: ${wtf()}</li>
    <li>exp: ${2 + 3}</li>
</ul>`;

console.log(html);
