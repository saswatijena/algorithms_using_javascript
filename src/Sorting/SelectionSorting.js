function SelectionSort(arr) {
    if (!Array.isArray(arr)) { throw new Error('Passed in value must be an array') }
    // loop through first of the array to one element before last 
    for (let i = 0; i < arr.length - 1; i++) {
        // min value at the begining of the loop will always be the first element 
        let minimumIndex = i;
        // loop through i + 1 till the end of the array
        for (let j = i + 1; j < arr.length; j++) {
            // compare the current element with the min value
            if (arr[j] < arr[minimumIndex]) minimumIndex = j;
        }
        // if min index is different than i then swap it with i 
        if (i !== minimumIndex) {
            swap(arr, i, minimumIndex);
        }
    }

    return arr;
}

function swap(arr, i, minIndex) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

module.exports = SelectionSort;