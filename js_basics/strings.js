
let fname = "John";
let lname = "Doe";

// Concatenation - combinig srting together;
let fullname = fname + " " + lname;
console.log(fullname);

// String Tempates  - String Literals

//let quote = "I\ncan\ndo\nit"
let quote = `I 
can
do
it`

console.log(quote)


// Interpolation - embeding variable in string

let firstName = "Jane", lastName = "Doe";
console.log(`The full name is = ${firstName} ${lastName}.`);

let quntity = 5, price = 1.5; 

console.log(`The total price is $${quntity * price}`);

// primitive string vs object string

let city1 = "Chicago";
let city2 = new String("Chicago;")

console.log(city1);
console.log(city2);

console.log(typeof city1);
console.log(typeof city2);

console.log(city2 == city2);
console.log(city2 === city2);

// charAt()

