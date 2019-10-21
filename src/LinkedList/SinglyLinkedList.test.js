let expect = require('chai').expect;
let List = require('./SinglyLinkedList');

describe('Singly Linked List', () => {
    // it('should pop items', () => {
    it('shoudl add items', () => {
        let list = new List();
        list.push(10);
        list.push(20);

        let current = list.head;
        expect(current.value).to.equal(10);
        current = current.next;
        expect(current.value).to.equal(20);

        list.push(30);
        current = current.next;
        expect(current.value).to.equal(30);

    })
    it('should pop items when there are more than one nodes', () => {
        let list = new List();
        list.push(10);
        list.push(20);
        list.push(30);

        list.pop();

        let current = list.head;
        expect(current.value).to.equal(10);
        current = current.next;
        expect(current.value).to.equal(20);
        expect(current.next).to.be.null;
    });
    it('should pop items when there is only one node', () => {
        let list = new List();
        list.push(10);
        list.pop();

        let current = list.head;
        expect(current).to.be.null;
    });
    // })
})