const expect = require('chai').expect;
const QuickSort = require('./QuickSort')

describe('Quick sort should sort array', () => {
    it('should sort array', () => {
        let arr = [4, 3, 1, 7, 3, 1];
        let sortedArray = QuickSort(arr);
        expect(sortedArray).to.be.an('array');
        expect(sortedArray).to.eql([1, 1, 3, 3, 4, 7]);
    })
    it('should throw error when the array passed in is not an array', () => {
        let arr = 'some string';
        expect(() => QuickSort(arr)).to.throw('must be an array');
    });
    it('should throw error if passed in value is null', () => {
        let arr = null;
        expect(() => QuickSort(arr)).to.throw('must be an array');
    })
    it('should throw error if passed in value is undefined', () => {
        let arr = undefined;
        expect(() => QuickSort(arr)).to.throw('must be an array');
    })
})