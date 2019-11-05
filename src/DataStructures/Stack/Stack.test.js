const expect = require('chai').expect;
const Stack = require('./Stack');

describe('Stack', () => {
    describe('push', () => {
        it('should push value when there are no items in the stack', () => {
            let stack = new Stack();
            stack.push(10);

            expect(stack.first.value).to.equal(10);
            expect(stack.last.value).to.equal(10);
            expect(stack.size).to.equal(1);
        });
        it('should push value when there are more than one itmes in the stack', () => {
            let stack = new Stack();
            stack.push(10);
            stack.push(20);
            stack.push(30);

            expect(stack.first.value).to.equal(30);
            expect(stack.last.value).to.equal(10);
            expect(stack.size).to.equal(3);
        });
    });
    describe('pop', () => {
        it('should return undefined when there are no items in the stack', () => {
            let stack = new Stack();
            let poppedItem = stack.pop();

            expect(stack.first).to.be.null;
            expect(stack.last).to.be.null;
            expect(stack.size).to.equal(0);
            expect(poppedItem).to.be.undefined;
        });
        it('should return the first item when there is only one item in the stack', () => {
            let stack = new Stack();
            stack.push(10);

            let poppedItem = stack.pop();
            expect(stack.first).to.be.null;
            expect(stack.last).to.be.null;
            expect(stack.size).to.equal(0);
            expect(poppedItem).to.equal(10);
        });
        it('should return the first item when there are more than one item in the stack', () => {
            let stack = new Stack();
            stack.push(10);
            stack.push(20);
            stack.push(30);
            stack.push(40);

            let poppedItem = stack.pop();
            expect(stack.first.value).to.equal(30);
            expect(stack.last.value).to.equal(10);
            expect(stack.size).to.equal(3);
            expect(poppedItem).to.equal(40);
        });
    })
});