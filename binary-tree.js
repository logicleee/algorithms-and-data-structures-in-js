function TreeNode (val, leftChild, rightChild) {
    this.value = val
    this.leftChild = leftChild
    this.rightChild = rightChild

}

function insertValue(value, node) {
    if (value < node.value) {
        if (node.leftChild === undefined) {
            node.leftChild = new TreeNode(value)
        } else {
            insertValue(value, node.leftChild)
        }
    } else if (value > node.value) {
        if (node.rightChild === undefined) {
            node.rightChild = new TreeNode(value)
        } else {
            insertValue(value, node.rightChild)
        }
    }
}

function deleteValue(value, node) {
    let currentNode = node
    let index = 0

    if (node === undefined) {
        return undefined

    } else if (value < node.value) {
        node.leftChild = deleteValue(value, node.leftChild)
        return node
    } else if (value > node.value) {
        node.rightChild = deleteValue(value,node.rightChild)
        return node
    } else if (value === node.value) {
        if (node.leftChild === undefined) {
            return node.rightChild
        } else if (node.rightChild === undefined) {
            return node.leftChild
        } else {
            node.rightChild = lift(node.rightChild, node)
            return node
        }
    }
}

function lift(node, nodeToDelete) {
    if (node.leftChild != undefined) {
        node.leftChild = lift(node.leftChild, nodeToDelete)
    } else {
        nodeToDelete.value = node.value
        return node.rightChild
    }
}


function searchTree(value, node) {
    if (node === undefined || node.value === value) return node
    else if (value < node.value) return searchTree(value, node.leftChild)
    else return searchTree(value, node.rightChild)
}

function traverseAndPrint(node) {
    if (node === undefined) return
    traverseAndPrint(node.leftChild)
    console.log(node.value)
    traverseAndPrint(node.rightChild)
}

function BinaryTree(rootNode) {
    this.node = rootNode
    this.add = (x) => insertValue(x,this.node)
    this.del = (x) => deleteValue(x,this.node)
    this.search = (x) => searchTree(x,this.node)
    this.traverseAndPrint = () => traverseAndPrint(this.node)
}



const c = Array(10).fill(0).map(x => Math.floor(Math.random()*100))
const d = Array(100).fill(0).map(x => Math.floor(Math.random()*100))
console.log(c)

//let rootNode = new TreeNode(50)
//let root = new BinaryTree(rootNode)


let root = new BinaryTree(new TreeNode(50))

console.log('i am root:', root.node)
console.log('adding more:')
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
    "Memiors of Ulysses Grant"
]

let root2 = new BinaryTree(new TreeNode("Hello World"))

console.log('i am root:', root2.node)
console.log('adding more:')
e.forEach(x => root2.add(x))
console.log(root2.node)
root2.traverseAndPrint()
