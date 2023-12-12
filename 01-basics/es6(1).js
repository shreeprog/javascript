//set
//how to declared set
const mySet=new Set();
console.log(mySet)
//add element into set
mySet.add(3)
mySet.add(4)
mySet.add(5)
mySet.add(6)
mySet.add(2)
mySet.add(3)
console.log(mySet)
//how to find size of set
console.log(mySet.size);
//how to delete element from set
console.log(mySet.delete(3))
console.log(mySet)
//how to check that element exist in the set or not
console.log(mySet.has(10))
//iteration in the set(to show all the values)
for(let values of mySet)
console.log(values)
