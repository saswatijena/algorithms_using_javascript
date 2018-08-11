let binarySearch = function (sortedArray, num) {
    const mid_index = Math.floor(sortedArray.length / 2);
    if (sortedArray.length === 1 && sortedArray[mid_index] !== num) {
        return -1;
    }

    if (sortedArray[mid_index] === num) {
        return mid_index;
    } else if (num > sortedArray[mid_index]) {
        binarySearch(sortedArray.slice(mid_index + 1), num);
    } else if (num < sortedArray[mid_index]) {
        binarySearch(sortedArray.slice(0, mid_index), num);
    }
}

module.exports = binarySearch;