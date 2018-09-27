let Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.init();
    }
    init() {
        for (let i = 1; i <= 5; i++) {
            this.addNode(i);
        }
    }

    addNode(value) {

        let new_node = new Node(value);

        if (!this.head) {
            this.head = new_node;
        } else {
            let current_node = this.head;
            while (current_node.next) {
                current_node = current_node.next;
            }

            current_node.next = new_node;
        }
    }

    toString() {
        let current_node = this.head;
        let list_string = '';
        while (current_node) {
            list_string += current_node.value + "  --> ";
            current_node = current_node.next;
        }
        return list_string;
    }

}

module.exports = LinkedList;