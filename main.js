import linkedList from './linked-list.js'

const myList = linkedList();
myList.append("two");
myList.prepend("one");
myList.append("three");
myList.printValues();
// console.log(myList.size());
// console.log(myList.first());
// console.log(myList.tail());
// console.log(myList.at(3));
myList.pop();
myList.printValues();