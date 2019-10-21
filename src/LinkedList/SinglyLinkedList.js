class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /** Add node at the end of the list */
    push(value) {
        if (value === null || value === undefined) throw Error('passed in value cannot be null or undefined')
        let newNode = new Node(value);
        if (!this.head) {
            // if head is null create the node and point both head and tail to the node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // else create the node point the tail node's next and tail to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment length 
        this.length++;
        return this;
    }
    /** Removes node at the end of the list */
    pop() {
        if (!this.head) return this;
        let current = this.head;
        let tempTail = this.head;
        while (current.next) {
            tempTail = current;
            current = current.next;
        }
        tempTail.next = null;
        this.tail = tempTail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }
}
