# Sorting
Sorting is a very common task and fundamental in programming 

Each algorithm has its own pros and cons


### Bubble Sort
+ Compare each number to its next and swap so that the highest number bubbles up to the end of the array
+ **Big O : n^2**
+ Works really well in case of nearly sorted data 

### Selection Sort
+ Select the minimum and move it to the begining
Better than bubble sort cause swaping only happens once
+ **Big O : n^2**
+ Does not perform well in nearly sorted data 


### Insertion Sort    
+ Loops through the array and inserts the element  being evaluated at the correct place in the already evaluated portion of the array
+ **Big O : n^2**
+ Works really well in case of nearly sorted data 
+ Works well in case of streaming data 
+ The above sorting algorithms don't scale very well. They work well with small data but not for huge amount of data


###  Merge Sort 
+ Keep spliting the array into halves until you are left with single valued arrays and then merge them after sorting
+ **Big O : O(n log n)**
    
    Log n is for splitting the array and n comparisions while merging
+ If is already sorted or any sort of pervious data manuplations doesnot matter cause eventually this splits the array no matter what the orientation of the array is.

### Quick Sort
+ On the same lines of merge sort, we split the array till we get arrays of length 0 or 1.
+ Randomly pick a **pivot** and then arrange all the items that are less than the pivot to the left side and all the items that are larger than the pivot to the right side. That way the pivot item is in the correct place if the array was to be sorted. 
+ Best case is n log n which is similar to merge sort
+ **Big O : n^2**


### Radix Sort
+ All the above are comparision sort. This one is a special sorting algorithm that doesnot use comparision
+ This uses the concept of grouping based on the position of the digit in a number
+ Number of iterations will depend on number of digits in the highest number