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
    }

}