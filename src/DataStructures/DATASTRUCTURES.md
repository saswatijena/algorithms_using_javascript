# Data structures

Data structures are collections of values and relationships among them or actions to be performed on them for e.g add, sort, remove, etc.

### Singly Linked List

- Contain head, tail and length property
- Consists of nodes, each node has a value and a pointer to another node or null
- **Big O :**

  - Inserting :**O(1)** at the beigining or end of the list
  - Removal : **O(1)** at the begining and **O(n)** at the end of the list
  - Searching : **O(n)**
  - Access : **O(n)**

- Excels at insertion and deletion in comparision to array.

### Doubly Linked List 
- Contains head, tail and length property 
- Consists of nodes, where each node has a value and points to next as well as previous node. 
- takes up more memory is one of the drawbacks which is almost always a tradeoff :) 

  - Inserting :**O(1)** 
  - Removal : **O(1)** 
  - Searching : **O(n)** still faster than singly linked list as its n/2
  - Access : **O(n)** still faster than singly linked list as its n/2

- takes more space than singly linked list
- but finds nodes in half the time

### Stacks 
- abides by LIFO principle 
- eg undo changes in doc
- We can use an array and use push and pop. We can also use shift and unshift, but that is a little inefficient, since it invloves shifting all the items if a new item is to be added or removed
- We can also use a linked list to implement the same.
- It should have two methods push and pop. Push pushes a new item to the stack and Pop pops item from the end of the stack.
- Push and pop should be constant time. So if we are using singly linked list instead of using push and pop(0(n)), using shift and unsift will ensure that its contant time.
- In case of doubly linked list you can use push/pop and shift/unshift as both are constant time

  - Inserting :**O(1)** 
  - Removal : **O(1)** 
  - Searching : **O(n)**
  - Access : **O(n)**

### Queues
- abides by FIFO principle 
- eg. background tasks, uploading resources, printing
- We can use both arrays and linked list
- has two functions enqueue to add the to the queue and dequeue to remove from the queue
- If we use arrays then we use either the combination of push/shift and unshift/pop, either of which will result in reindexing. So it is best to implement queues using linked list instead of arrays
- Since in singly linked list adding at the end is O(n), removing at the begining O(1) and adding at the end O(1) is the best option.

- Inserting :**O(1)** 
- Removal : **O(1)** 
- Searching : **O(n)**
- Access : **O(n)**

### Tree
- A child can have only one parent
- A parent can have more than one child
- In case of binary tree a parent can have a maximum of 2 childs 
- In case of binary search tree left child is smaller than the parent and right tree is greater than the parent
- eg HTML DOM, JSON structure, Network Routing, Abstract syntax tree, Folders in OS, Artifitial intelligence to determine possible outcomes of a game and take the best step

- Inserting :**O(log n)** worst case scenario when the tree looks like a linked list will not be log(n)
- Removal : 
- Searching : **O(log n)**
- Access : **O(log n)**

## Breadth first search (BFS)
- Traverses one layer at a time, horizontally
- Use queue to keep track of all the items from the same layer

## Depth first search (DFS)
- Traverses node vertically
- has pre order, post order and in order ways of traversal


## BFS vs DFS
- Time complexity does not matter in this case as we are touching each node
- In terms of space complexity if we have a wide tree BFS stores a lot of nodes in memory and takes a lot of space in comparision to DFS.But if the tree is deeper than it is wider DFS would end up taking more memory than BFS.

### Heaps
- Heaps are essentially trees which are inverted and has different rules
- Max Binary heap - parent node is larger than its children. Root is the maximum in the heap
- Min Binary heap - parent node is smaller than its children. Root is the miminum in the heap
- Very compact
- Used to implement **priority queue**, used in graph traversal algorithms
- Heap can be represented using an array instead of nodes where child is at 2n + 1 parent is math.floor((n-1)/2)

- Inserting : **O(log n)**  does not have a possibility of a linked list like looking tree so worst case is also log(n)
- Removal : **O(log n)** 
- Searching : **O(n)**

### Hash Tables 
- key value pair
- implementing hash tables require us to convert keys into valid array indices, the functions that perform that are called hash functions.
- separate chaining and linear probing are two ways to handle collisions
- separate chaining is maintaining a nested array when a collision happens
- linear probing is maintaining one array, when there is a collision we look for next empty slot in an array

### Graphs
- Collection of nodes and connections between them which can either be directed or undirected
- eg social networking sites, maps, recommendations engine
- **vertex** is a node and **edge** is a connection between nodes 
- weighted graph is one where edges have values 
- We can use adjacency matrix to store edges between two nodes 
- We can also use adjacency list where each index contains a list of nodes which it has connections to. However this is most useful if nodes are numeric or has huge gaps. In that case we use a hash to store the list of nodes that it has connections to.  


