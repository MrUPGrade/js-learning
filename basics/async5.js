// Await can be use only in async function
async function main() {

  async function greeting(name) {
    if (typeof name !== 'undefined') {
      return `Hi ${name}!`;
    }

    throw new Error('Parameter "name" not provided');
  }

  greeting('John')
    .then((g) => console.log(g));

  greeting()
    .catch((e) => console.log('Error calling function greeting()\n', e));

  console.log('program ends here');
}

main();