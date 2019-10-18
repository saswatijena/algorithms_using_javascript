
var assert = require('chai').assert;
var expect = require('chai').expect;

var basicSorting = require('./BasicSorting');

describe('Array should sort', function () {
    it('should sort array when a valid array is passed', () => {
        const arr = [3, 2, 1];
        const sortedArr = basicSorting(arr);
        expect(sortedArr).to.be.a('array')
        expect(sortedArr).to.eql([1, 2, 3]);
    });
    it('should throw error if the passed value is not an array', () => {
        const arr = { a: 1, b: 2 };
        // basicSorting
    });
    it('should return empty array if the passed array is empty', () => {

    });

});

