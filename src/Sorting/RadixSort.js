const RadixSort = (nums, base = 10) => {
    if (!Array.isArray(nums)) throw new Error('passed in value must be an array');
    // Till all the numbers are in the 0 bucket
    let counter = 0;
    let doOtherBucketsExist;

    do {
        doOtherBucketsExist = false;
        // Create a bucketing holder 
        let bucket = createBucket(base);

        // Go through each digit of the number and bucket them 
        for (let i = 0; i < nums.length; i++) {
            const currentValue = nums[i];
            const currentBucket = getDigit(currentValue, counter);
            bucket[currentBucket].push(currentValue);
            if (currentBucket !== 0) {
                doOtherBucketsExist = true;
            }
        }
        // Pull values in the same order they were inserted
        // let sorted = [];
        // for (bucketItem of bucket) {
        //     sorted = [...sorted, ...bucketItem];
        // }
        nums = [].concat(...bucket);// sorted;
        counter++;
    } while (doOtherBucketsExist);

    return nums;
}

function createBucket(base) {
    let bucket = Array.from({ length: base }, () => []);
    // for (let i = 0; i < base; i++) {
    //     bucket = [...bucket, []];
    // }
    return bucket;
}
function getDigit(number, position) {
    // let mod = 0;
    // while (position >= 0) {
    //     mod = Math.abs(number) % 10;
    //     number = Math.trunc(number / 10);
    //     position--;
    // }
    let mod = Math.trunc(Math.abs(number) / Math.pow(10, position)) % 10;
    return mod;
}

module.exports = {
    getDigit,
    createBucket,
    RadixSort
}