
/**
 * Stack using singly linked list
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let node = new Node(value);
        node.next = this.first;
        this.first = node;
        if (this.size === 0) {
            this.last = this.first;
        }

        this.size++;
        return this;
    }
    pop() {
        if (this.size === 0) return undefined;

        let poppedNode = this.first;
        this.first = this.first.next;
        poppedNode.next = null;
        this.size--;

        if (this.size === 0) {
            this.last = null;
        }
        return poppedNode.value;
    }
}

module.exports = Stack;