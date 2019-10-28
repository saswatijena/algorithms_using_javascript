const expect = require('chai').expect;
const DoublyLinkedList = require('./DoublyLinkedList');
describe('Doubly Linked List', () => {
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
    });
    describe('Pop', () => {
        it('should return undefined when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            let poppedItem = list.pop();

            expect(poppedItem).to.be.undefined;
        });
        it('should have a length of 0 when there are no nodes in the list before pop', () => {
            let list = new DoublyLinkedList();
            list.pop();

            expect(list.length).to.be.equal(0);
        });
        it('should return last node when there is one node in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);

            let poppedItem = list.pop();
            expect(poppedItem.value).to.be.equal(10);
            expect(list.head).to.be.null;
            expect(list.tail).to.be.null;
        });
        it('should have a length of 0 when there is one node in the list before pop', () => {
            let list = new DoublyLinkedList();
            list.push(10);

            let poppedItem = list.pop();
            expect(list.length).to.be.equal(0);
        });
        it('should return last node when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            let poppedItem = list.pop();
            expect(poppedItem.value).to.be.equal(30);
            expect(list.head.value).to.be.equal(10);
            expect(list.tail.value).to.be.equal(20);
        });
        it('should return correct length when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);
            list.push(40);
            list.push(50);

            let poppedItem = list.pop();
            expect(poppedItem.value).to.be.equal(50);
            expect(list.length).to.be.equal(4);
        });
    })
});
