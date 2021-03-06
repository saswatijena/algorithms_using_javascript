class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /** Pushes value at the end of the list */
    push(value) {
        let newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    /** Pops node from the end of the list */
    pop() {
        if (this.length === 0) return undefined;

        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }
    /** Removes node from the start of the list */
    shift() {
        if (this.length === 0) return undefined;
        let shifteNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifteNode.next;
            this.head.previous = null;
            shifteNode.next = null;
        }
        this.length--;
        return shifteNode;
    }
    /** Adds node to the begining of the list */
    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /** Gets node based on the passed in index */
    get(index) {
        if (index < 0 || index > this.length - 1) throw new Error('index is out of bound');

        let mid = Math.floor(this.length / 2);
        let foundNode;
        if (index <= mid) {
            // loop from the start to mid 
            let counter = 0;
            foundNode = this.head;
            while (counter !== index) {
                foundNode = foundNode.next;
                counter++;
            }
        } else {
            // loop from the end to mid
            let counter = this.length - 1;
            foundNode = this.tail;
            while (counter !== index) {
                foundNode = foundNode.previous;
                counter--;
            }
        }
        return foundNode;
    }
    /** Sets value of node based on the passed in index */
    set(index, value) {
        if (index === this.length) this.push(value);
        let node = this.get(index);
        node.value = value;
    }
    /** Inserts value at the passed in index */
    insert(index, value) {
        if (index < 0 || index > this.length) throw new Error('index is out of bound');

        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }

        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let nextNode = previousNode.next;

        previousNode.next = newNode;
        newNode.previous = previousNode;
        newNode.next = nextNode;
        nextNode.previous = newNode;

        this.length++;

        return this;
    }
    /** Removes node from the passed in index */
    remove(index) {
        if (index < 0 || index >= this.length) throw new Error('index is out of bound');
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let currentNode = this.get(index);
        let previousNode = currentNode.previous;
        let nextNode = currentNode.next;

        currentNode.next = null;
        currentNode.previous = null;
        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        return currentNode;
    }
    reverse() {
        const mid = Math.floor(this.length / 2);
        let counter = 0;
        let start = this.head;
        let end = this.tail;
        while (counter < mid) {
            let temp = start.value;
            start.value = end.value;
            end.value = temp;

            start = start.next;
            end = end.previous;
            counter++;
        }
        return this;
    }
}

module.exports = DoublyLinkedList;