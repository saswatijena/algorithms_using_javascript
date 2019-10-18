const expect = require('chai').expect;
const {
    getDigit,
    createBucket,
    RadixSort
} = require('./RadixSort')

describe('Radix sort should sort array', () => {
    it('should sort array', () => {
        let arr = [4, 3, 1, 7, 3, 1];
        let sortedArray = RadixSort(arr);
        expect(sortedArray).to.be.an('array');
        expect(sortedArray).to.eql([1, 1, 3, 3, 4, 7]);
    })
    it('should throw error when the array passed in is not an array', () => {
        let arr = 'some string';
        expect(() => RadixSort(arr)).to.throw('must be an array');
    });
    it('should throw error if passed in value is null', () => {
        let arr = null;
        expect(() => RadixSort(arr)).to.throw('must be an array');
    })
    it('should throw error if passed in value is undefined', () => {
        let arr = undefined;
        expect(() => RadixSort(arr)).to.throw('must be an array');
    })
});
describe('Get Digit', () => {
    it('should return the correct number at the given position', () => {
        let digit = getDigit(12345, 0);
        expect(digit).to.equal(5);
    })
    it('should return the correct number at the given position', () => {
        let digit = getDigit(12345, 1);
        expect(digit).to.equal(4);
    })
    it('should return the correct number at the given position', () => {
        let digit = getDigit(12345, 2);
        expect(digit).to.equal(3);
    })
});
describe('Create Bucket', () => {
    it('should return an array of blank items for base 10', () => {
        let bucket = createBucket(10);
        expect(bucket.length).to.equal(10);
        expect(bucket).to.eql([[], [], [], [], [], [], [], [], [], []]);
    });
    it('should return an array of blank items for base 2', () => {
        let bucket = createBucket(2);
        expect(bucket.length).to.equal(2);
        expect(bucket).to.eql([[], []]);
    })
})