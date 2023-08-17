
// random 0-1 included 
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num = Math.floor(Math.random()*2);
console.log(num);

if(num === 0){
   console.log("The number is ZERO");
}
else{
    console.log("The number is ONE");
}
 // 1-10

 let num1 = getRandomNumber(1,10);
 console.log(num1);

 if(num1 % 2 === 0 ) {
    console.log("The number is EVEN");
 }
 else {
    console.log("The number is ODD");
 }

 // -2 and 2 

 let num2 = getRandomNumber(-2,2);
 console.log(num2);

 if(num2 > 0) {
    console.log("The number is POSITIVE");
 }
 else if(num2 < 0) {
    console.log("The number is NEGATIVE");
 }
 else {
    console.log("The number is ZERO");
 }

 