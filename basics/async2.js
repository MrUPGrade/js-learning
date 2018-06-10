// Await can be use only in async function
async function main() {
  let promise = new Promise((resolve) => {
    resolve(`Hi there async!`);
  });

  const greet = await promise;
  console.log(greet);
}

main();