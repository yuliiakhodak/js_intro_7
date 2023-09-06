
const names =["John", "Jane", "Alex", "Max"];
names.forEach(name => console.log(name));
names.forEach(name => console.log(name[0]));
names.forEach(name => console.log(name.toUpperCase()));

let count = 0;
names.forEach(name => name.length === 4 ? count++ : count);
 console.log(count);
 console.log("\n-----------------------------------\n")

 const numbers = [5, 10, 3, 0, -2]
numbers.forEach(number => console.log(number))
numbers.forEach(number => console.log(number * 5))
numbers.forEach(number => console.log(number % 2 === 0))
