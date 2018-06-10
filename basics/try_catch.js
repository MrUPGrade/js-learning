try {
  dummyCall();
} catch (e) {
  console.log('message:',e.message);
  console.log('error name:', e.name);
} finally {
  console.log('finally is called always !')
}


console.log('end of script');