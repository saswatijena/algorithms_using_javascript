let binarySearch = function (sortedArray, num) {
    if(!sortedArray) {
        return -1
    }
    
    let low = 0;
    let high = sortedArray.length-1;
    while (low <= high) {
        let mid_index = low + Math.floor((high - low) / 2);
        if (num === sortedArray[mid_index]) {
            return mid_index;
        } else if (num > sortedArray[mid_index]) {
            low = mid_index + 1;
        } else if (num < sortedArray[mid_index]) {
            high = mid_index - 1;
        }
    }
    return -1;
}

module.exports = binarySearch;
