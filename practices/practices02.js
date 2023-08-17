
// TASK 1

let sentence1 = "I like apples and oranges";
console.log(sentence1.slice(7,12).toUpperCase());

let sentence2 = "Java is not a scripting programming language";
console.log(sentence2.slice(0,3) + sentence2[14].toUpperCase() + sentence2.slice(15,20));

let sentence3 = "I don't like books";
console.log(sentence3.replace("don't ",""));
//console.log(sentence3.slice(0,2) + sentence3.slice(8));

//TASK 2 

let s1 = "JavaScript";

console.log("The length is = " + s1.length);
console.log("The first char is = " + s1[0]);
console.log("The last char is = " + s1[(s1.length - 1 )]);

console.log(
s1.toLowerCase().includes("a") ||
s1.toLowerCase().includes("e") || 
s1.toLowerCase().includes("i") || 
s1.toLowerCase().includes("u") || 
s1.toLowerCase().includes("o"));

// Task 3

let s2 = "civic";
console.log(s2[(s2.length - 1)/2]);

let s3 ="abcd"; 

console.log(s3.slice(s3.length/2 - 1, s3.length / 2 + 1));

// Task 5

let s4 = "JavaScript";
console.log("The first 2 characters are = " + s4.slice(0,2));
console.log("The last 2 characters are = " + s4.slice(s4.length - 2));
console.log("The other characters are = " + s4.slice(2,s4.length - 2));

// Task 6 

let s5 = "abab";
console.log(s5.slice(0,2) == s5.slice(s5.length - 2));

// TASK 7

let s61 = "1234";
let s62 = "Green";
console.log(s61.slice(1,s61.length - 1) + s62.slice(1,s62.length - 1));

// Task 8 

let s7 = "xxredxx"

console.log(s7.startsWith("xx") && s7.endsWith("xx"));
console.log(s7.slice(0,2) === "xx" && s7.slice(s7.length-2) === "xx");

// TASK 9 

let s8 = "I like Apple";
let firstWord = s8.slice(0, s8.indexOf(" "));
let lastWord = s8.slice(s8.lastIndexOf(" ") + 1);
let middle = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" ") + 1)

console.log(lastWord + middle + firstWord);

// TASK 10 

let s9 = "JavaScript is nice to learn";
console.log(s9.length - s9.replaceAll(" ", "").length + 1);