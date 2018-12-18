const selectionSort = require('../selection-sort.js');

const rNum = (x) => Math.floor(Math.random() * x);
const unsortedArray = Array(100).fill(0).map(x => rNum(100));
const sortedArray = unsortedArray.slice().sort((a,b) => Number(a) - Number(b));

//console.log('unsorted', unsortedArray)
//console.log('sorted', sortedArray)

test('selection sort orders array the same as .sort() method', () => {
  expect(selectionSort(unsortedArray)).toEqual(sortedArray);
});
