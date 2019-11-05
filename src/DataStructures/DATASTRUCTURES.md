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
- We can use an array and use push and pop. We can also use shift and unshift, but that is a little inefficient, since it invloves shifting all the items if a new item is to be added or removed
- We can also use a linked list to implement the same.

- It should have two methods push and pop. Push pushes a new item to the stack and Pop pops item from the end of the stack.
- Push and pop should be constant time. So if we are using singly linked list instead of using push and pop(0(n)), using shift and unsift will ensure that its contant time.
- In case of doubly linked list you can use push/pop and shift/unshift as both are constant time