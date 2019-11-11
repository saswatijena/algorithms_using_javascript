class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    /**
     * Inserts a new node to the BST 
     */
    insert(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (value > current.value) {
                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = node;
                        break;
                    }
                } else {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = node;
                        break;
                    }
                }
            }
        }

        return this;
        // TODO: write unit test cases for this
    }
    /**
     * Finds a node with the given parameter
     * @param {*} value 
     */
    find(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) return current;
            else if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            }
        }
        return undefined;
        // TODO: write unit test cases for this

    }

    /**
     * Traverses the tree on level at a time i.e horizontally
     */
    bfs() {
        let data = [];
        let node = this.root;
        let queue = [node];
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    dfsPreOrder() {
        let data = [];
        preOrderTraverse(this.root, data);
        return data;
    }

    preOrderTraverse(node, data) {
        data.push(node.value);
        if (node.left) this.preOrderTraverse(node.left, data);
        if (node.right) this.preOrderTraverse(node.right, data);
    }
    dfsPostOrder() {
        let data = [];
        postOrderTraverse(this.root, data);
        return data;
    }

    postOrderTraverse(node, data) {
        if (node.left) this.postOrderTraverse(node.left, data);
        if (node.right) this.postOrderTraverse(node.right, data);
        data.push(node.value);
    }
    dfsInOrder() {
        let data = [];
        inOrderTraverse(this.root, data);
        return data;
    }

    inOrderTraverse(node, data) {
        if (node.left) this.inOrderTraverse(node.left, data);
        data.push(node.value);
        if (node.right) this.inOrderTraverse(node.right, data);
    }
}