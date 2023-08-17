// Task 1

let str1 = "5", str2 = "2";
str1 = Number(str1), 
str2 = Number(str2);

console.log("The sum of 5 and 2 is = " + (str1 + str2));
console.log(`The product of 5 and 2 is =  ${str1 * str2}`);
console.log(`The division of 5 and 2 is = ${str1 / str2}`);
console.log(`The subtraction of 5 and 2 is = ${str1 - str2}`);
console.log("The remainder of 5 and 2 is = " + str1 % str2);
console.log("The exponentiation of 5 and 2 is = " + 5 ** 2);


// Task 2

let s1 = "200", s2 = "-50";
s1 = Number(s1), s2 = Number (s2);

console.log("The greatest value is = " + Math.max(s1, s2));
console.log("The smallest value is = " + Math.min (s1, s2));
console.log(`The average is = ${(s1 + s2) / 2 }`);
console.log("The absolute difference is = " + Math.abs(s1 - s2));

//Task 3 

let random1 = Math.floor(Math.random() * 50 + 1);
let random2 = Math.floor(Math.random() * 50 + 1);

console.log(`The absolute difference between numbers is = ${Math.abs(random1 - random2)}`);

// Task 4 

let rn1 = Math.floor(Math.random() * 50 + 1);
let rn2 = Math.floor(Math.random() * 50 + 1);
let rn3 = Math.floor(Math.random() * 50 + 1);
let rn4 = Math.floor(Math.random() * 50 + 1);
let rn5 = Math.floor(Math.random() * 50 + 1);

console.log("The max value = " + Math.max(rn1, rn2, rn3, rn4, rn5));
console.log("The min value = " + Math.min(rn1, rn2, rn3, rn4, rn5));

// Task 5 

let num1 = Math.floor(Math.random() * 51 + 50);
let num2 = Math.floor(Math.random() * 51 + 50);
let num3 = Math.floor(Math.random() * 51 + 50);

console.log("The number 1 = " + num1);
console.log("The number 2 = " + num2);
console.log("The number 3 = " + num3);
console.log("The sum of numbers is = " + (num1 + num2 + num3));

// Task 6 

let rannum1 = Math.floor(Math.random() * 100 + 1); 
let rannum2 = Math.floor(Math.random() * 100 + 1); 
let rannum3 = Math.floor(Math.random() * 100 + 1); 

console.log(Math.min(rannum1, rannum2, rannum3) > 25);


// Task 7 

let name = "David"; 

console.log("The length of the name is = " + name.length);
console.log(`The first character in the name is = ${name[0]}`);
console.log("The last character in the name is = " + name[4]);
console.log("The first 3 characters in the name are = " + name.slice (0,3));
console.log("The last 3 characters in the name are = " + name.slice(2));