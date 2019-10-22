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
    if (value === null || value === undefined)
      throw Error("passed in value cannot be null or undefined");
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
    if (!this.head) return undefined;
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
    return current;
  }
  /** Removes node from the head */
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    if (current.next) {
      this.head = current.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return current;
  }
  /** Adds node to the head */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /** Takes an index and returns value of that position */
  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error("index is out of bound");
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    // if (!current && index >= counter) throw new Error('index is out of bound');
    return current;
  }
  /** Takes index and value and sets the value at the index */
  set(index, value) {
    if (index < 0 || index >= this.length)
      throw new Error("index is out of bound");
    // let current = this.head;
    // let counter = 0;

    // while (counter < index) {
    //     current = current.next;
    //     counter++;
    // }
    // current.value = value;
    // return current;
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  /** Inserts node at the specified index */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }

    let newNode = new Node(value);
    let perviousNode = this.get(index - 1);

    newNode.next = perviousNode.next;
    perviousNode.next = newNode;
    this.length++;

    return true;
  }
  /** Removes node from the specific index */
  remove(index) {
    if (index < 0 || index >= this.length)
      throw new Error("out of bound exception");

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      // get the item at the previous index and point next of the next;
      let previousNode = this.get(index - 1);
      const removedNode = previousNode.next;
      previousNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }
  /** Reverses the list in-place */
  reverse() {
    let previous = null;
    let node = this.head;
    let next;
    for (let counter = 0; counter < this.length; counter++) {
      next = node ? node.next : null;
      node.next = previous;
      previous = node;
      node = next;
    }

    // swap the head and the tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

module.exports = SinglyLinkedList;
