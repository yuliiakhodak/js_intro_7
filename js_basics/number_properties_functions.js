
// number properties

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// number function

Number.toString(123 + 2);//125

console.log((123).toString() + 2);//1232
console.log((123).toString() * 2);//246

console.log((10.521).toFixed(2));//10.52
console.log((10.521).toFixed(1));//10.5

console.log((120000 / 52 ).toFixed(0));//2308

console.log((1.23).toPrecision(2));//1.2

// CONVERTING other data types in numbers

console.log(true + 1);  // 2   
console.log(false + 1); // 1   
console.log(Number(true) + 1); // 2   
console.log(Number(false) + 1); // 1

console.log(Number("5.5") + 1); //6.5
console.log(parseInt("5.5") + 1); //6
console.log(parseFloat("5.5") + 1); //6.5

console.log(Number("") + 1);// 1
console.log(parseInt("") + 1);// NaN

// How to check if number is interger or safe integer
// 1, 1000, "1"

let number1 = 1, number2 = 1000, number3 = "1", number4 = 2561514586488541564156165;

console.log(Number.isInteger(number1)); // true
console.log(Number.isInteger(number2)); // true 
console.log(Number.isInteger(number3)); // false 
console.log(Number.isInteger(number4)); // true 

console.log(Number.isSafeInteger(number1)); // true 
console.log(Number.isSafeInteger(number2)); // true
console.log(Number.isSafeInteger(number3)); // false
console.log(Number.isSafeInteger(number4)); // false

console.log(Number.isInteger(25.5)); // false
console.log(Number.isInteger("123")); // false
console.log(Number.isInteger(Number("123"))); // true

