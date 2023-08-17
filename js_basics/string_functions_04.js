

let word = "JavaScript";

// slice() function

console.log(word.slice(0,4)); // Java
console.log(word.slice(4)); //Script

/*
vaS
Scr
ipt
aScri
*/

console.log(word.slice(2,5));
console.log(word.slice(4,7));
console.log(word.slice(7,10));
console.log(word.slice(3,8));

console.log(word.substring(2,5));
console.log(word.substring(4,7));
console.log(word.substring(7));
console.log(word.substring(3,8));

// Tricky part

let car = "Tesla";
console.log(car.slice(2,15)); // sla
console.log(car.substring(2,15)); // sla

console.log(car.slice(-3, 2)); // empty -> accept negative inde[es and will try extracring a subsrting
console.log(car.substring(-3,2)); // Te -> reads all negative numbers as 0

//split() function
let sentence = "JavaScript is the most used programming language";

console.log(sentence.split(" "));
console.log(sentence.split("most"));

