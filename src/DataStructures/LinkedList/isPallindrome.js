const Node = require('./node');
const LinkedList = require('./linkedlist');

const reverse = (list) => {
    let reverse = new LinkedList();
    while (list) {
        let node = new Node(list.value);
        node.next = reverse.head;
        reverse.head = node;
        list = list.next;
    }
    return head;
}

const isPallindromeUsingReverse = (list) => {
    // First reverse the linked list and then compare if the reverse is true
    // If we know the length of the list then when comparing we only need to check half way through the list

    const reverse = reverse(list);
    console.log(reverse.toString())
    // return isEqual(list, reverse);


}
const isPallindromeHandler = () => {
    let l1 = new LinkedList();
    l1.addNode(20);
    l1.addNode(21);
    l1.addNode(20);
    l1.addNode(20);
    console.log(l1.toString());
    isPallindromeUsingReverse(l1);
}
module.exports = isPallindromeHandler;