
function isPositive(arg){

   return arg > 0;
}

console.log(isPositive(6));
console.log(isPositive(-6));
// false, null "" - 0, true - 1 
// Write a function called isNegative that takes an argument and returns true if the arg is negative, false otherwise
function isNegative(arg1){
    return arg1 < 0;
}

console.log(isNegative(6));
console.log(isNegative(-6));


function getFirstChar(arg1){
    return arg1[0];
}
console.log(getFirstChar("Hello"));

function getFirstLastChar(str){
    return str[0] + str[str.length - 1]
}

console.log(getFirstLastChar("Hello"));
console.log(getFirstLastChar("12345"));

function getRandomNumber(start, end){ 
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(getRandomNumber(5,10));
console.log(getRandomNumber(50,100));

// write a function called average5 that takes 5 argument and return their average

function avarage5(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5;
}
console.log(avarage5(8,8,9,10,10))



