
const students = [];
students.push("Alex" );
console.log(students);
students.push("John", "John", "Jane")
console.log(students);
students.push(["Mark", "Max", "Maria"])
console.log(students); // [ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ]
console.log(students.length);//5