let expect = require('chai').expect;
let List = require('./SinglyLinkedList');

describe('Singly Linked List', () => {
    it('should add items', () => {
        let list = new List();
        expect(list.length).to.equal(0);
        list.push(10);
        list.push(20);


        let current = list.head;
        expect(current.value).to.equal(10);
        expect(list.length).to.equal(2);

        current = current.next;
        expect(current.value).to.equal(20);
        expect(list.tail.value).to.equal(20);
        expect(list.length).to.equal(2);

        list.push(30);
        current = current.next;
        expect(current.value).to.equal(30);
        expect(list.tail.value).to.equal(30);
        expect(list.length).to.equal(3);


    })
    it('should pop items when there are more than one node', () => {
        let list = new List();
        list.push(10);
        list.push(20);
        list.push(30);

        expect(list.length).to.equal(3);
        list.pop();

        expect(list.length).to.equal(2);
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
        expect(list.length).to.equal(0);
    });
    it('should return undefined for pop items when there is no node', () => {
        let list = new List();
        let output = list.pop();
        expect(output).to.be.undefined;
        expect(list.length).to.equal(0);
    });
    it('should shift items if there are more than one node', () => {
        let list = new List();
        list.push(10);
        list.push(20);
        list.push(30);
        expect(list.length).to.equal(3);
        let shiftedNode = list.shift();
        expect(shiftedNode.value).to.equal(10);
        expect(list.length).to.equal(2);

    });
    it('should shift items if there is only one node', () => {
        let list = new List();
        list.push(10);

        let shiftedNode = list.shift();
        expect(shiftedNode.value).to.equal(10);
        expect(list.head).to.be.null;
        expect(list.tail).to.be.null;
        expect(list.length).to.equal(0);

    });
    it('should return undefined for shift items when there is no node', () => {
        let list = new List();
        let output = list.shift();
        expect(output).to.be.undefined;
        expect(list.length).to.equal(0);
    });
    it('should unshift items when there are no items in the list', () => {
        let list = new List();
        list.unshift(10);

        expect(list.head.value).to.equal(10);
        expect(list.tail.value).to.equal(10);
        expect(list.length).to.equal(1);
    });
    it('should unshift items when there are already items in the list', () => {
        let list = new List();
        list.unshift(10);
        list.unshift(20);

        expect(list.head.value).to.equal(20);
        expect(list.tail.value).to.equal(10);
        expect(list.length).to.equal(2);

        list.unshift(30);

        expect(list.head.value).to.equal(30);
        expect(list.tail.value).to.equal(10);
        expect(list.length).to.equal(3);
    });

})