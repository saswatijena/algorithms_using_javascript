Big O is the upper bound on time
    * Ignore constants 
        e.g if the complexity of an algorithm is 2N then we can sefely ignore the constant 2, hence the complexity is 2N
        similarly if the complexity is 2N+5 is also 2N
    * Drop the non dominant terms
        e.g if the complexity of an algorithm is 2n(pow)2 + 5n + 1 then 5n is the non dominant term and can be dropped off. Hence the complexity
        will be O(n(pow)2)
        
    * constant (1)
    * linear (n)
    * logrithmic (logn)
    * exponential (2pow(n))
    * quadratic (npow2)