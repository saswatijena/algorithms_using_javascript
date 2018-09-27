let LinkedList = require('./linkedlist');

function removeDupsByHash(list) {
    let hash = new Set();

    let current_node = list.head;
    hash.add(current_node.value);

    let next_node = current_node.next;

    while (current_node && next_node) {
        let value = next_node.value;
        if (!hash.has(value)) {
            hash.add(value);
            current_node = next_node;
        } else {
            current_node.next = next_node.next;
        }

        next_node = next_node.next;

    }
}
function removeDupsInline(list) {

}
function removeDups() {
    let l1 = new LinkedList();
    l1.addNode(20);
    l1.addNode(21);
    l1.addNode(20);
    l1.addNode(20);
    console.log(l1.toString());
    removeDupsInline(l1);
    console.log(l1.toString());
}

module.exports = removeDups;
