

let name = "John"

// length property: it returns the count of the characters in the string

console.log(name.length); // 4
console.log(typeof name.length); // number

// String - Changing Cases toUpperCase() vs toLowerCase

let greeting = "Good Morning";

let lowerGreeting = greeting.toLowerCase();
let upperGreeting = greeting.toUpperCase();

console.log(greeting);
console.log(lowerGreeting); // good morning
console.log(upperGreeting); // GOOD MORNING


// Tricky strings
console.log("123ABC$#$#".toLowerCase());

// String - Extracting Characters

let city ="CHICAGO";
console.log(city[0]); // C
console.log(city[3]); // C
console.log(city[6]); // O

 let fc = city[0];
console.log(typeof fc); // string

// Tricky part 

console.log(city[7]); // undefined
console.log(city[-5]); // undefined
console.log("\n-----------\n")

// charAt()

console.log(city.charAt(0));
console.log(city.charAt(city.length - 1));

// Tricky part 
console.log(city.charAt(7));
console.log(city.charAt(10));
console.log(city.charAt(100));
console.log(city.charAt(-3));

//charCodeat() returns decimal representation of the character in the ASCII

let country = "USA";
console.log(country.charCodeAt(0)); // 85
console.log(country.charCodeAt(1)); // 83
console.log(country.charCodeAt(3)); // NaN


