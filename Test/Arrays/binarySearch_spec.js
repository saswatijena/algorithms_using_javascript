let chai = require('chai');
let binarySearch = require('../../Arrays/binarySearch.js');

describe('Binary Search', function () {
    it('should return -1 when the value is not present in the array', function () {
        let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 90);
        chai.assert.equal(index, -1, 'not returning -1 when the value is not present in the array');
    });
    it('should return -1 when the array is empty', function () {
        let index = binarySearch([], 9);
        chai.assert.equal(index, -1, 'not returning -1 when the array is empty');
    });
    it('should return -1 when the array is null', function () {
        let index = binarySearch(null, 9);
        chai.assert.equal(index, -1, 'not returning -1 when the array is null');
    });
    it('should return appropriate index if the value is present in the array', function () {
        let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6);
        chai.assert.equal(index, 5, 'did not return the correct index when the value is present in the array')
    });
    it('should return 0 when the value is present at the start of the array', function () {
        let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1);
        chai.assert.equal(index, 0, 'not returing 0 for the start of the array')
    });
    it('should return the length of the array - 1 when the value is present at the end of the array', function () {
        let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8);
        chai.assert.equal(index, 7, 'not returning correct index for the last of the array');
    });
});
