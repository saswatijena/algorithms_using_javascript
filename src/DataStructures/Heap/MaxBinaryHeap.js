class MaxBinaryHeap {

    constructor() {
        this.values = [];
    }

    insert(value) {
        // Add it to the end 
        // then bubble up by comparing to the possible parent
        this.values.push(value);
        this.bubbleUp();
    }
    /**
     * Removes the maximumum i.e the root of the heap
     */
    remove() {
        // Remove the root i.e the first element of the array
        // bring the last element to the first of the array 
        // and then trickle down the element by comparing it which child elements 
        // and swaping with the child with the largest value
        if (this.values.length <= 0) return undefined;
        let removed = this.values[0];
        this.values = [this.values[this.values.length - 1], ...this.values.slice(0, this.values.length - 1)];

        const currentValue = this.values[0];
        let currentIndex = 0;

        while (true) {
            const leftChildIdx = 2 * currentIndex + 1;
            const leftChild = this.values[leftChildIdx]
            const rightChildIdx = leftChildIdx + 1;
            const rightChild = this.values[rightChildIdx];

            let largestChildIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;
            let largestValue = leftChild > rightChild ? leftChild : rightChild;

            if (currentValue > largestValue) break;


            this.values[largestChildIdx] = currentValue;
            this.values[currentIndex] = largestValue;
            currentIndex = largestChildIdx
        }

        return removed;
    }

    bubbleUp() {
        let currentIndex = this.values.length - 1;
        const currentValue = this.values[currentIndex];

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.values[parentIndex];

            if (parentValue >= currentValue) break;

            this.values[parentIndex] = currentValue;
            this.values[currentIndex] = parentValue;
            currentIndex = parentIndex;
        }
    }
}

exports.module = MaxBinaryHeap;