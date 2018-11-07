let LinkedList = require('./linkedlist');
let Node = require('./node');



let sumOfLists = (l1, l2) => {

    let sumList = new LinkedList();
    let carry = 0;

    let list1 = l1.head;
    let list2 = l2.head;

    while (list1 || list2) {

        let sum = (list1 ? list1.value : 0) + (list2 ? list2.value : 0) + carry;
        carry = Math.floor(sum / 10);
        let output = sum % 10;

        // add the output at the end of the list
        sumList.addNode(output);

        list1 = list1 ? list1.next : null;
        list2 = list2 ? list2.next : null;
    }

    console.log(sumList.toString());
}

let sumOfListsHandler = () => {
    let l1 = new LinkedList();
    l1.addNode(7);
    l1.addNode(1);
    l1.addNode(6);

    console.log(l1.toString());
    let l2 = new LinkedList();
    l2.addNode(5);
    l2.addNode(9);
    l2.addNode(2);

    console.log(l2.toString());

    sumOfLists(l1, l2);

}

module.exports = sumOfListsHandler;