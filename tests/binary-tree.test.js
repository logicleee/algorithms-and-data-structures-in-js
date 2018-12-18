const BinaryTree = require('../binary-tree.js');

let root = new BinaryTree(50)

test('able to create root node', () => {
  expect(root.node.value).toEqual(50)

})





// -----------------------------------
// TODO convert some of these to tests
// -----------------------------------

  /*
console.log('i am root:', root.node)
console.log('adding more:')
const c = Array(10).fill(0).map(x => Math.floor(Math.random()*100))
const d = Array(100).fill(0).map(x => Math.floor(Math.random()*100))
c.forEach(x => root.add(x))
//console.log(root.node)
root.traverseAndPrint()

console.log('searching:', c[5])
let result = root.search(c[5])
//console.log(result)
root.traverseAndPrint()


console.log('deleting:', c[5])
root.del(c[5])
console.log('searching:', c[5])
result = root.search(c[5])
//console.log(result)
root.traverseAndPrint()


console.log('adding more:')
d.forEach(x => root.add(x))
console.log(root.node)

console.log('searching:', d[50])
result = root.search(d[50])
console.log(result)


console.log('deleting:', d[50])
root.del(d[50])
console.log('searching:', d[50])
result = root.search(d[50])
console.log(result)

let e = ["Moby Dick",
    "Robinson Crusoe",
    "Pride and Prejudice",
    "The Odyssey",
    "Great Expectations",
    "Personal Memoirs of Ulysses S. Grant"
]

//let root2 = new BinaryTree(new TreeNode("Hello World"))
let root2 = new BinaryTree("Hello World")

console.log('i am root:', root2.node)
console.log('adding more:')
e.forEach(x => root2.add(x))
console.log(root2.node)
root2.traverseAndPrint()

*/
