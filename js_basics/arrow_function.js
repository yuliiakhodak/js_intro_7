// regular function
function product1 (x, y){
    return x * y;
}

console.log(product1(3, 5));

// function expression 
const product2 = function(x, y ){ 
    return x * y;
};
console.log(product2(3, 5));

//arrow function
const product3 = (x, y) => x * y;

console.log(product3(3, 5));
// regular 
function fizzBuzz1(num){
    if(num % 15 === 0)  console.log ("FizzBuzz");
    else if(num % 3 === 0) console.log ("Fizz");
    else if(num % 5 === 0) console.log ("Buzz");
    else console.log (num);
};

fizzBuzz1(15)

// function expression

const fizzBuzz2 = function(num){
    if(num % 15 === 0)  console.log ("FizzBuzz")
    else if(num % 3 === 0) console.log ("Fizz")
    else if(num % 5 === 0) console.log ("Buzz")
    else console.log (num)
}

fizzBuzz2(15);

// arrow
const fizzBuzz3 = num => {
    if(num % 15 === 0)  console.log ("FizzBuzz");
    else if(num % 3 === 0) console.log ("Fizz");
    else if(num % 5 === 0) console.log ("Buzz");
    else console.log (num);
};

fizzBuzz1(15);

const greeding3 = () => console.log("Hello")
greeding3()