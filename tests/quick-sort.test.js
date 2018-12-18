const quickSort = require('../quick-sort');

const rNum = (x) => Math.floor(Math.random() * x);
const unsortedArray = Array(100).fill(0).map(x => rNum(100));
const sortedArray = unsortedArray.slice().sort((a,b) => Number(a) - Number(b));

test('quick sort orders array the same as .sort() method', () => {
  expect(quickSort(unsortedArray)).toEqual(sortedArray);
});
