# Sorting
Sorting is a very common task and fundamental in programming 

Each algorithm has its own pros and cons


## Bubble Sorting
+ Compare each number to its next and swap so that the highest number bubbles up to the end of the array
+ **Big O : n pow 2**
+ Works really well in case of nearly sorted data 

## Selection Sorting
+ Select the minimum and move it to the begining
Better than bubble sort cause swaping only happens once
+ **Big O : n pow 2**
+ Does not perform well in nearly sorted data 


## Insertion Sorting    
+ Loops through the array and inserts the element  being evaluated at the correct place in the already evaluated portion of the array
+ **Big O : n pow 2**
+ Works really well in case of nearly sorted data 
+ Works well in case of streaming data 
+ The above sorting algorithms don't scale very well. They work well with small data but not for huge amount of data


##  Merge Sort 
+ Keep spliting the array into halves until you are left with single valued arrays and then merge them after sorting
+ **Big O : O(n log n)**
    
    Log n is for splitting the array and n comparisions while merging
+ If is already sorted or any sort of pervious data manuplations doesnot matter cause eventually this splits the array no matter what the orientation of the array is 
