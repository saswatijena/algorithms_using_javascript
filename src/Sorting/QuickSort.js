const QuickSort = (arr, start = 0, end = arr ? arr.length : 0) => {
    // [4, 3, 1, 7, 3, 1]
    if (!Array.isArray(arr)) throw new Error('passed in value must be an array');
    if (end - start <= 1) return arr;
    // Find a pivot point usually the first point
    if (arr) {
        let pivot = arr[start];
        let swapIndex = start;

        for (let i = start + 1; i < end; i++) {
            if (arr[i] < pivot) {
                swapIndex++;
                if (i !== swapIndex) {
                    let temp = arr[swapIndex];
                    arr[swapIndex] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        arr[start] = arr[swapIndex];
        arr[swapIndex] = pivot;

        // Quick Sort the left 
        QuickSort(arr, start, swapIndex);
        // // Quick Sort the right 
        QuickSort(arr, swapIndex + 1, end);
    }

    return arr;

}

module.exports = QuickSort;