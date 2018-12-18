const bubbleSort = require('../bubble-sort');

const rNum = (x) => Math.floor(Math.random() * x);
const unsortedArray = Array(100).fill(0).map(x => rNum(100));
const sortedArray = unsortedArray.slice().sort((a,b) => Number(a) - Number(b));

test('bubble sort orders array the same as .sort() method', () => {
  expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
});
