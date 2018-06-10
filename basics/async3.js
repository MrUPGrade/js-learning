// Await can be use only in async function
async function main() {
  let promise = new Promise((resolve, reject) => {
    reject('Damn!');
  });

  try {
    const greet = await promise;
  } catch (e) {
    console.log(e);
  }
}

main();