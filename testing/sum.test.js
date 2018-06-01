const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  let result = sum(1, 2);
  expect(result).toBe(3);
});