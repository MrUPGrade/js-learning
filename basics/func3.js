function multipleArgs(name1='Stefan', name2='Edgar') {
  console.log(`name1: ${name1}, name2: ${name2}`);
}


multipleArgs();
multipleArgs('J', 'K');

// This works differently then expected
multipleArgs(name1='J', name2='K');
// :(
multipleArgs(name2='2', name1='1');
multipleArgs(a='ass1', b='ass2');

multipleArgs();
