//String - Searching

let text = "Can I can a can";
// search 

let result1 = text.search("can"); // 6
let result2 = text.search("Can"); // 0

console.log(result1);
console.log(result2);

//Tricky part 

console.log(text.search(""));   // 0
console.log(text.search(" "));  // 3
console.log(text.search("  ")); //-1
console.log(text.search(text)); //-1
console.log(text.search(text)); //-1


//includes() function

let quote = "I can do it";

let r1 = quote.includes("can"); // 
let r2 = quote.includes("it"); // 
let r3 = quote.includes("IT"); // 

console.log(r1); // true
console.log(r2); // true
console.log(r3); // false

// Tricky

console.log(quote.includes(quote)); // true

// indexOf() vs lastIndexOf(); index = position

let greeting = "GOOD MORNING"

console.log(greeting.indexOf("G")); // 0
console.log(greeting.lastIndexOf("G")); // 11

console.log(greeting.indexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("GOOD")); // 0
console.log(greeting.indexOf("GOOD MORNING")); // 0
console.log(greeting.lastIndexOf("GOOD MORNING")); // 0

let sentence = "I like apple and pineapple";
console.log(sentence.indexOf("apple")); // 7
console.log(sentence.lastIndexOf("apple"));// 21

// TRICKY

console.log(sentence.indexOf("abc")); // -1
console.log(sentence.lastIndexOf("abc")); // -1
console.log(sentence.indexOf(" ")); // 1
console.log(sentence.lastIndexOf(" ")); // 16

console.log(sentence.indexOf("")); // 0
console.log(sentence.lastIndexOf("")); // 26

// startsWith() vs endsWith()

let info = "My phone number is 312-000-0000";

console.log(info.startsWith("M")); // true
console.log(info.startsWith("My")); // true
console.log(info.endsWith("0000")); // true

console.log(info.startsWith("phone")); // false
console.log(info.endsWith("0")); // true

console.log(info.startsWith(info));// true
console.log(info.endsWith(info));// true

console.log(info.startsWith(""));// true


