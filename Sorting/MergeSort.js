const MergeSortedArrays = (arr1, arr2) => {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    // Create a new array to store the sorted array 
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        } else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }
    // Check if both reached the end of the array 
    while (j < arr2.length) {
        sortedArray.push(arr2[j]);
        j++;
    }
    while (i < arr1.length) {
        sortedArray.push(arr1[i]);
        i++;
    }
    return sortedArray;
}



const MergeSort = (arr) => {
    if (!Array.isArray(arr)) throw new Error('passed in value must be an array')
    if (arr.length === 1) return arr;

    // Split array till single element array
    let mid = Math.floor(arr.length / 2);
    let arr1 = MergeSort(arr.slice(0, mid));
    let arr2 = MergeSort(arr.slice(mid, arr.length));
    // Merge two sorted arrays 
    return MergeSortedArrays(arr1, arr2);

    return [];
}

module.exports = { MergeSort, MergeSortedArrays };