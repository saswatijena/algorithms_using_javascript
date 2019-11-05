const expect = require('chai').expect;
const Queue = require('./Queue');

describe('Queue', () => {
    describe('enqueue', () => {
        it('should add the end of the list when there are no items in the list', () => {
            let queue = new Queue();
            queue.enqueue(10);

            expect(queue.size).to.equal(1);
            expect(queue.first.value).to.equal(10);
            expect(queue.last.value).to.equal(10);
        });
        it('should add the end of the list when there are more than one items in the list', () => {
            let queue = new Queue();
            queue.enqueue(10);
            queue.enqueue(20);
            queue.enqueue(30);


            expect(queue.size).to.equal(3);
            expect(queue.first.value).to.equal(10);
            expect(queue.last.value).to.equal(30);
        });
    });
    describe('dequeue', () => {
        it('it should return undefined when there are no items in the queue', () => {
            let queue = new Queue();
            let dequeuedItem = queue.dequeue();

            expect(queue.first).to.be.null;
            expect(queue.last).to.be.null;
            expect(queue.size).to.be.equal(0);
            expect(dequeuedItem).to.be.undefined;
        });
        it('it should return the first item when there is one item in the queue', () => {
            let queue = new Queue();
            queue.enqueue(10);

            let dequeuedItem = queue.dequeue();

            expect(queue.first).to.be.null;
            expect(queue.last).to.be.null;
            expect(queue.size).to.be.equal(0);
            expect(dequeuedItem).to.equal(10);
        });
        it('it should return the first item when there are more than one items in the queue', () => {
            let queue = new Queue();
            queue.enqueue(10);
            queue.enqueue(20);
            queue.enqueue(30);

            let dequeuedItem = queue.dequeue();

            expect(queue.size).to.equal(2);
            expect(dequeuedItem).to.equal(10);
        });
    })
})