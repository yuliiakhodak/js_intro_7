 
 
let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8;

//-8, -5, 5, 7 , 10 

let maxNumber = Math.max(num1, num2, num3, num4, num5);

console.log(maxNumber); // 10

let minNumber = Math.min(num1, num2, num3, num4, num5); 

console.log(minNumber); // -8 

// the abs()

// rounding numbers 

console.log(Math.ceil(5.11));  // 6
console.log(Math.ceil(5.99));  // 6
console.log(Math.floor(5.11)); // 5
console.log(Math.floor(5.99)); // 5
console.log(Math.round(5.11)); // 5
console.log(Math.round(5.99)); // 6

console.log(Math.trunc(5.11)); // 5
console.log(Math.trunc(5.99)); // 5


//pow()  function

console.log(2 ** 5); // 32
console.log(Math.pow(2,5)); // 32
console.log(Math.pow(3,2)); // 9
console.log(2 ** 3); // 9

console.log(Math.sqrt(64)); // 8

// random() function

console.log(Math.random());// 0 to 0.999999999999...
console.log(Math.random());// 0 to 0.999999999999...
console.log(Math.random());// 0 to 0.999999999999...
console.log(Math.random());// 0 to 0.999999999999...
console.log(Math.random());// 0 to 0.999999999999...

//Find a random number between 1 and 10 (both included) 


console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))

console.log(Math.trunc(-5.11)) // -5
console.log(Math.trunc(-5.99)) // -5 
console.log(Math.floor(-5.99)) // -6
console.log(Math.floor(-5.99)) // -6
 
// homework: come up with a way to generate a random number between 10 and 20 (both included)

console.log(Math.round(Math.random() * 10 + 10 ));


// come up with a way to generate a random number between X and Y (both included)
// Math.flo(or(Math.random() * ( y - x +1)) + x 
console.log(Math.floor(Math.random() * 11) + 10);



