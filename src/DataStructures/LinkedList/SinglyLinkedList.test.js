let expect = require("chai").expect;
let List = require("./SinglyLinkedList");

describe("Push", () => {
  it("should push items", () => {
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
  });
});
describe("Pop", () => {
  it("should pop items when there are more than one node", () => {
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
  it("should pop items when there is only one node", () => {
    let list = new List();
    list.push(10);
    list.pop();

    let current = list.head;
    expect(current).to.be.null;
    expect(list.length).to.equal(0);
  });
  it("should return undefined for pop items when there is no node", () => {
    let list = new List();
    let output = list.pop();
    expect(output).to.be.undefined;
    expect(list.length).to.equal(0);
  });
});
describe("Shift", () => {
  it("should shift items if there are more than one node", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);
    expect(list.length).to.equal(3);
    let shiftedNode = list.shift();
    expect(shiftedNode.value).to.equal(10);
    expect(list.length).to.equal(2);
  });
  it("should shift items if there is only one node", () => {
    let list = new List();
    list.push(10);

    let shiftedNode = list.shift();
    expect(shiftedNode.value).to.equal(10);
    expect(list.head).to.be.null;
    expect(list.tail).to.be.null;
    expect(list.length).to.equal(0);
  });
  it("should return undefined for shift items when there is no node", () => {
    let list = new List();
    let output = list.shift();
    expect(output).to.be.undefined;
    expect(list.length).to.equal(0);
  });
});
describe("Unshift", () => {
  it("should unshift items when there are no items in the list", () => {
    let list = new List();
    list.unshift(10);

    expect(list.head.value).to.equal(10);
    expect(list.tail.value).to.equal(10);
    expect(list.length).to.equal(1);
  });
  it("should unshift items when there are already items in the list", () => {
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
});
describe("Get", () => {
  it("should return the correct value when the index is greater than 0", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);

    let node = list.get(1);
    expect(node.value).to.equal(20);
    node = list.get(0);
    expect(node.value).to.equal(10);
    node = list.get(3);
    expect(node.value).to.equal(40);
  });
  it("should throw error when index is out of range", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    expect(() => list.get(10)).to.throw("index is out of bound");
    expect(() => list.get(3)).to.throw("index is out of bound");
  });
  it("should throw error when index is less than 0", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    expect(() => list.get(-10)).to.throw("index is out of bound");
    expect(() => list.get(-3)).to.throw("index is out of bound");
  });
});
describe("Set", () => {
  it("should set the correct value when the index is greater than 0", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);

    let node = list.set(1, 200);
    expect(list.get(1).value).to.equal(200);
    node = list.set(0, 100);
    expect(list.get(0).value).to.equal(100);
    node = list.set(3, 400);
    expect(list.get(3).value).to.equal(400);
  });
  it("should throw error when index is out of range", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    expect(() => list.set(10, 200)).to.throw("index is out of bound");
    expect(() => list.set(3, 200)).to.throw("index is out of bound");
  });
  it("should throw error when index is less than 0", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    expect(() => list.set(-10, 200)).to.throw("index is out of bound");
    expect(() => list.set(-3, 200)).to.throw("index is out of bound");
  });
});
describe("Insert", () => {
  it("should insert when the index is 0", () => {
    let list = new List();
    list.insert(0, 100);
    expect(list.get(0).value).to.equal(100);
    expect(list.length).to.equal(1);
  });
  it("should insert when the index is equal to the length", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    list.insert(3, 2000);
    expect(list.get(3).value).to.equal(2000);
    expect(list.length).to.equal(4);
  });
  it("should insert when the index somewhere in between", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    list.insert(1, 2000);
    expect(list.get(1).value).to.equal(2000);
    expect(list.get(2).value).to.equal(20);
    expect(list.length).to.equal(4);
  });
  it("should increment the length by 1 when inserted", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    list.insert(1, 2000);
    expect(list.length).to.equal(4);
  });
});
describe("Remove", () => {
  it("should remove from the head if given index is at the begining", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    let removedNode = list.remove(0);
    expect(removedNode.value).to.equal(10);
    expect(list.head.value).to.equal(20);
    expect(list.tail.value).to.equal(30);
    expect(list.length).to.equal(2);
  });
  it("should remove from the tail if given index is at the end", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    let removedNode = list.remove(2);
    expect(removedNode.value).to.equal(30);
    expect(list.head.value).to.equal(10);
    expect(list.tail.value).to.equal(20);
    expect(list.length).to.equal(2);
  });
  it("should remove from the head if given index is somewhere in between", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);

    let removedNode = list.remove(1);
    expect(removedNode.value).to.equal(20);
    expect(list.head.value).to.equal(10);
    expect(list.tail.value).to.equal(30);
    expect(list.length).to.equal(2);
  });
  it("should remove from the head if there is only one item in the list", () => {
    let list = new List();
    list.push(10);

    let removedNode = list.remove(0);
    expect(removedNode.value).to.equal(10);
    expect(list.head).to.be.null;
    expect(list.tail).to.be.null;
    expect(list.length).to.equal(0);
  });
});
describe("Reverse", () => {
  it("should reverse a list with single node", () => {
    let list = new List();
    list.push(10);

    let reversedList = list.reverse();
    expect(reversedList.head.value).to.equal(10);
    expect(reversedList.tail.value).to.equal(10);
    expect(reversedList.length).to.equal(1);
  });
  it("should reverse a list with two nodes", () => {
    let list = new List();
    list.push(10);
    list.push(20);

    let reversedList = list.reverse();
    expect(reversedList.head.value).to.equal(20);
    expect(reversedList.tail.value).to.equal(10);
    expect(reversedList.length).to.equal(2);
  });
  it("should reverse a list with three node", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);
    let reversedList = list.reverse();
    expect(reversedList.head.value).to.equal(30);
    expect(reversedList.tail.value).to.equal(10);
    expect(reversedList.length).to.equal(3);
  });
  it("should reverse a list with more than three nodes", () => {
    let list = new List();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);

    let reversedList = list.reverse();
    expect(reversedList.head.value).to.equal(60);
    expect(reversedList.tail.value).to.equal(10);
    expect(reversedList.length).to.equal(6);

    let nextNode = reversedList.head.next;
    expect(nextNode.value).to.equal(50);
    nextNode = nextNode.next;
    expect(nextNode.value).to.equal(40);
    nextNode = nextNode.next;
    expect(nextNode.value).to.equal(30);
    nextNode = nextNode.next;
    expect(nextNode.value).to.equal(20);
    nextNode = nextNode.next;
    expect(nextNode.value).to.equal(10);
  });
});
