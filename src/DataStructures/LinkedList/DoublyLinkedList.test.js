const expect = require('chai').expect;
const DoublyLinkedList = require('./DoublyLinkedList');

describe('Push', () => {
    it('should push node when there are no nodes in the list', () => {
        let list = new DoublyLinkedList();
        list.push(10);
        expect(list.head.value).to.equal(10);
        expect(list.tail.value).to.equal(10);
        expect(list.length).to.equal(1);
    });
    it('should push node when there is one node in the list', () => {
        let list = new DoublyLinkedList();
        list.push(10);
        list.push(20);
        expect(list.head.value).to.equal(10);
        expect(list.tail.value).to.equal(20);
        expect(list.length).to.equal(2);
        expect(list.head.next.value).to.equal(20);
        expect(list.head.previous).to.be.null;
        expect(list.tail.next).to.be.null;
        expect(list.tail.previous.value).to.equal(10);

    });
    it('should push node when there are multiple nodes in the list', () => {
        let list = new DoublyLinkedList();
        list.push(10);
        list.push(20);
        list.push(30);
        list.push(40);

        expect(list.head.value).to.equal(10);
        expect(list.tail.value).to.equal(40);
        expect(list.length).to.equal(4);
        expect(list.head.previous).to.be.null;
        expect(list.tail.next).to.be.null;

        let current = list.head.next;
        expect(current.value).to.equal(20);
        expect(current.previous.value).to.equal(10);

        current = current.next;
        expect(current.value).to.equal(30);
        expect(current.previous.value).to.equal(20);

        current = current.next;
        expect(current.value).to.equal(40);
        expect(current.previous.value).to.equal(30);

    });
})