
/**
 * Add to the end and remove from the begining
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /**
     * Adds to the end of the list
     */
    enqueue(value) {
        let node = new Node(value);
        if (this.size === 0) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }
    /**
     * Removes from the begining of the list
     */
    dequeue() {
        if (this.size === 0) return undefined;
        let dequeuedNode = this.first;
        this.first = dequeuedNode.next;
        dequeuedNode.next = null;
        if (this.size === 1) {
            this.last = null;
        }
        this.size--;
        return dequeuedNode.value;
    }
}

module.exports = Queue;