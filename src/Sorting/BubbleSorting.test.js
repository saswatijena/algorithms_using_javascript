const expect = require('chai').expect;
const BubbleSort = require('./BubbleSorting')

describe('Bubble sorting should sort array', () => {
    it('should sort array', () => {
        let arr = [4, 3, 1, 7, 3, 1];
        let sortedArray = BubbleSort(arr);
        expect(sortedArray).to.be.an('array');
        expect(sortedArray).to.eql([1, 1, 3, 3, 4, 7]);
    })
    it('should throw error when the array passed in is not an array', () => {
        let arr = 'some string';
        expect(() => BubbleSort(arr)).to.throw('must be an array');
    });
    it('should throw error if passed in value is null', () => {
        let arr = null;
        expect(() => BubbleSort(arr)).to.throw('must be an array');
    })
    it('should throw error if passed in value is undefined', () => {
        let arr = undefined;
        expect(() => BubbleSort(arr)).to.throw('must be an array');
    })
})