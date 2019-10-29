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
            expect(list.tail.next).to.be.null;
            expect(poppedItem.next).to.be.null;
            expect(poppedItem.previous).to.be.null;

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
    });
    describe('Shift', () => {
        it('should return undefined when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            let shiftedNode = list.shift();

            expect(shiftedNode).to.be.undefined;
        });
        it('should have a length of 0 when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            let shiftedNode = list.shift();

            expect(list.length).to.be.equal(0);
        });
        it('should return first node when there is one node in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);

            let shiftedNode = list.shift();
            expect(shiftedNode.value).to.equal(10);
            expect(shiftedNode.next).to.be.null;
            expect(shiftedNode.previous).to.be.null;
            expect(list.head).to.be.null;
            expect(list.tail).to.be.null;

        });
        it('should have a length of 0 when there is one node in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);

            let shiftedNode = list.shift();
            expect(list.length).to.equal(0);
        });
        it('should return first node when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            let shiftedNode = list.shift();
            expect(shiftedNode.value).to.equal(10);
            expect(shiftedNode.next).to.be.null;
            expect(shiftedNode.previous).to.be.null;
            expect(list.head.value).to.equal(20);
            expect(list.head.previous).to.be.null;
            expect(list.tail.value).to.equal(30);
            expect(list.tail.next).to.be.null;
        });
        it('should return correct length when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            let shiftedNode = list.shift();
            expect(list.length).to.equal(2);
        });
    });
    describe('Unshift', () => {
        it('should add node to the begining of the list when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);

            expect(list.head.value).to.equal(10);
            expect(list.tail.value).to.equal(10);
            expect(list.head.previous).to.be.null;
            expect(list.head.next).to.be.null;
            expect(list.tail.previous).to.be.null;
            expect(list.tail.next).to.be.null;

        });
        it('should have a length of 1 when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);

            expect(list.length).to.equal(1);
        });
        it('should add node at the begining of the list when there is one node in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);
            list.unshift(20);

            expect(list.head.value).to.equal(20);
            expect(list.tail.value).to.equal(10);
            expect(list.head.previous).to.be.null;
            expect(list.head.next.value).to.equal(10);
            expect(list.tail.previous.value).to.equal(20);
            expect(list.tail.next).to.be.null;
        });
        it('should have a length of 2 when there is one node in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);
            list.unshift(20);

            expect(list.length).to.equal(2);
        });
        it('should add node at the begining of the list when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);
            list.unshift(20);
            list.unshift(30);
            list.unshift(40);
            list.unshift(50);

            expect(list.head.value).to.equal(50);
            expect(list.tail.value).to.equal(10);
            expect(list.head.previous).to.be.null;
            expect(list.head.next.value).to.equal(40);
            expect(list.tail.previous.value).to.equal(20);
            expect(list.tail.next).to.be.null;
        });
        it('should have correct length when there are more than one nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.unshift(10);
            list.unshift(20);
            list.unshift(30);
            list.unshift(40);
            list.unshift(50);

            expect(list.length).to.equal(5);
        });
    });
    describe('Get', () => {
        it('should throw error if index is less than 0', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            expect(() => list.get(-1)).to.throw('index is out of bound');
        });
        it('should throw error if index is greater than or equal to length', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            expect(() => list.get(3)).to.throw('index is out of bound');
            expect(() => list.get(4)).to.throw('index is out of bound');
        });
        it('should get the first item if index is 0', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            let firstNode = list.get(0);
            expect(firstNode.value).to.equal(10);
        });
        it('should get the last item if index is 1 less than the length', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            let firstNode = list.get(2);
            expect(firstNode.value).to.equal(30);
        });
        it('should get value at the specified index', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);
            list.push(40);
            list.push(50);
            list.push(60);
            list.push(70);

            let firstNode = list.get(4);
            expect(firstNode.value).to.equal(50);
        })
    });
    describe('Set', () => {
        it('should set when there are no nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.set(0, 10);

            expect(list.get(0).value).to.equal(10);
        });
        it('should set the last item when there are multiple nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            list.set(3, 40);
            expect(list.get(3).value).to.equal(40);
        });
        it('should set when there are multiple nodes in the list', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            list.set(1, 40);
            const node = list.get(1);
            expect(node.value).to.equal(40);
            expect(node.next.value).to.equal(30);
            expect(node.previous.value).to.equal(10);
        });
        it('should throw error if the index is less than 0', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            expect(() => list.set(-1, 40)).to.throw('index is out of bound')
        });
        it('should throw error if index is greater than the length', () => {
            let list = new DoublyLinkedList();
            list.push(10);
            list.push(20);
            list.push(30);

            expect(() => list.set(4, 40)).to.throw('index is out of bound')
        })
    })
});
