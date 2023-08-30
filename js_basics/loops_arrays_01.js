const names = ["John", "Max", "Alex", "Jane"]
for (i = 0; i <= 3; i++){
    console.log(names[i]);
}
// to UpperCase () 
// for of loop
for ( let name of names){
    console.log(name.toUpperCase());
}
// for loop
for (i = 0; i <= 3; i++){
    console.log(names[i].toUpperCase());
}
console.log("\n --------- TASK - 1 -----------\n")
//
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let count = 0;
for(i = 0; i < numbers.length; i++){
    if (numbers[i] > 0) count++
}
console.log(count);
// for of loop
let countPos = 0;
for (const number of numbers){
    if (number > 0) countPos++;
}
console.log(countPos)

// Even numbers

let countEven = 0;
for (const number of numbers){
    if (number  % 2 === 0) countEven++;
}
console.log(countEven)

console.log("\n --------- TASK - 3 -----------\n")
// multiplied by 5 

for (const number of numbers){
console.log(number * 5);
}

//
function multiply5 (number){
    return number * 5;
}
console.log(multiply5(5))

numbers.forEach(function multiply5 (number){
    console.log (number * 5);
});

numbers.forEach((number) => {console.log (number * 5)});
