
//Math.floor(Math.random() * ( y - x +1)) + x 

let randomNumber = Math.floor(Math.random() * 51);
console.log(randomNumber);
console.log("The random number * 5 = " + randomNumber * 5);

// Task 2 

let num2 = Math.ceil(Math.random() * 10);
let num1 = Math.ceil(Math.random() * 10);

console.log(num1, num2);
console.log("Min number = "  + Math.min(num1, num2)); // 1 - ceil ; 0 - floor
console.log("Max number = "  + Math.max(num1, num2));
console.log("Difference = "  + Math.abs(num1 - num2));

// Task 3 // Math.floor(Math.random() * ( y - x +1)) + x 

let random = Math.floor(Math.random() * 51 + 50);
console.log("The random number % 10 = " + random % 10);

// Task 4 

let random1 = Math.ceil(Math.random() * 10);
let random2 = Math.ceil(Math.random() * 10);
let random3 = Math.ceil(Math.random() * 10);
let random4 = Math.ceil(Math.random() * 10);
let random5 = Math.ceil(Math.random() * 10);

console.log(random1, random2, random3, random4,random5)
console.log(random1 * 5 + random2 * 4 + random3 * 3 + random4 * 2  + random5 * 1);

// Task 5 
let n1 = Math.ceil(Math.random() * 25)      // 1  - 25
let n2 = Math.ceil(Math.random() * 25 + 25) // 26 - 50 
let n3 = Math.ceil(Math.random() * 25 + 50) // 51 - 75
let n4 = Math.ceil(Math.random() * 25 + 75) // 76 - 100

console.log(n1, n2, n3, n4);
console.log("Difference of max and min = " + (n4 - n1));
console.log("Difference of second and third = " + (n3 - n2));
console.log("Average of all = " + (n1 + n2 + n3 + n4) / 4 );

 /// 10 - 20

console.log(Math.floor(Math.random() * 11 + 10));

// 1 - 5
console.log(Math.floor(Math.random()* 5 + 1));









