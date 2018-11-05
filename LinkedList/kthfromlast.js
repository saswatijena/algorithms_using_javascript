let LinkedList = require('./linkedlist');

let kthFromLast = (list, k) => {
    let runner = list.head;
    for (let i = 0; i < k; i++) {
        runner = runner.next;
    }

    let current = list.head;
    while (runner) {
        runner = runner.next;
        current = current.next;
    }
    return current.value;
}

let kthFromLastHandler = (k) => {
    let l1 = new LinkedList();
    l1.addNode(20);
    l1.addNode(21);
    l1.addNode(20);
    l1.addNode(20);
    console.log(l1.toString());
    console.log(kthFromLast(l1, k));

}

module.exports = kthFromLastHandler;
