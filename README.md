Javascript does not have a good built in way to create a range of numbers. In Ruby, we could do something like:

numbers = (2..10).to_a

There is no equivalent in Javascript!

Implement a range function that returns an array of numbers from the start number to the end number (inclusive).

Example:

range(2,10)  // should return [2,3,4,5,6,7,8,9,10]
