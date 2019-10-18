const InsertionSorting = (arr) => {
    if (!Array.isArray(arr)) throw new Error('passed value must be an array');

    // Start with the 2nd element and compare with the section before it to insert 
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        // Loop through the section before i to find the position for i
        for (var j = i - 1; j >= 0; j--) {
            if (currentValue < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}
module.exports = InsertionSorting;