function BinaryTree(rootNode) {
    //this.node = rootNode
    this.node = new TreeNode(rootNode)
    this.add = (x) => insertValue(x,this.node)
    this.del = (x) => deleteValue(x,this.node)
    this.search = (x) => searchTree(x,this.node)
    this.traverseAndPrint = () => traverseAndPrint(this.node)

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
}



module.exports = BinaryTree;
