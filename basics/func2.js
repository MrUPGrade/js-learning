function dummyFunc() {
  console.log('Dummy function!');
  return 'stupid result';
}

function callLoger(func = dummyFunc) {
  console.log(`Calling: ${func.name}`);

  let result = func();

  if (typeof result !== 'undefined') {
    console.log(`function returned: ${result}`);
  }
}

callLoger();