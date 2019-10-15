const BubbleSort = (arr) => {
    if (!Array.isArray(arr)) throw new Error('passed in value must be an array');

    let noSwapOccurred;

    let i = arr.length - 1;
    while (i > 0) {
        noSwapOccurred = true;
        let j = 0;
        while (j < i) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
                noSwapOccurred = false;
            }
            j++;
        }
        if (noSwapOccurred) break;
        i--;
    }

    return arr;
}


function swap(arr, j) {
    let temp = arr[j + 1];
    arr[j + 1] = arr[j];
    arr[j] = temp;
}

module.exports = BubbleSort;