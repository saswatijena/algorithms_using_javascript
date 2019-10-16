const expect = require('chai').expect;
const { MergeSortedArrays, MergeSort } = require('./MergeSort');

describe('Merge should merge two sorted arrays', () => {
    it('should merge two equal length sorted arrays', () => {
        let arr1 = [1, 10, 24];
        let arr2 = [9, 25, 27];
        let sortedArray = MergeSortedArrays(arr1, arr2);
        expect(sortedArray).to.eql([1, 9, 10, 24, 25, 27]);
    });
    it('should merge when arr1 length is > than arr2 length', () => {
        let arr1 = [1, 3, 5, 6];
        let arr2 = [4];
        let sortedArray = MergeSortedArrays(arr1, arr2);
        expect(sortedArray).to.eql([1, 3, 4, 5, 6])
    });
    it('should merge when arr2 length is > than arr1 length', () => {
        let arr1 = [4, 5];
        let arr2 = [1, 3, 5, 6];
        let sortedArray = MergeSortedArrays(arr1, arr2);
        expect(sortedArray).to.eql([1, 3, 4, 5, 5, 6])
    })
})

describe('Merge sort should sort array', () => {
    it('should sort array', () => {
        let arr = [4, 3, 1, 7, 3, 1];
        let sortedArray = MergeSort(arr);
        expect(sortedArray).to.be.an('array');
        expect(sortedArray).to.eql([1, 1, 3, 3, 4, 7]);
    })
    it('should throw error when the array passed in is not an array', () => {
        let arr = 'some string';
        expect(() => MergeSort(arr)).to.throw('must be an array');
    });
    it('should throw error if passed in value is null', () => {
        let arr = null;
        expect(() => MergeSort(arr)).to.throw('must be an array');
    })
    it('should throw error if passed in value is undefined', () => {
        let arr = undefined;
        expect(() => MergeSort(arr)).to.throw('must be an array');
    })
})