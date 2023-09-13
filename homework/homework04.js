// Task - 1

for (i = 1; i <= 100; i++){
    if (i % 7 === 0) console.log(i)
}

// Task 2
for (i = 1; i <= 50; i++ ) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i)
}

// Task 3
for (i = 100; i >= 50; i-- ) {
    if (i % 5 === 0) console.log(i)
}

// Task 4 
for (let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ${i**2}`)
}

// Task 5
let sum = 0;
for (let i = 1; i <= 10; i++){
     sum += i;
}
console.log(sum);

// Task 6

let number = Math.floor(Math.random()* 10 + 1);
console.log(number);
let factorial = 1;
for (let i = number; i >= 1; i--){
   factorial *= i;
}
console.log(factorial);

// Task 7

let RandomNumber;
let attemps = 0;
do{RandomNumber = Math.floor(Math.random() * 100 + 1);
attemps++;
} while(RandomNumber % 5 !== 0 );
console.log(`The random number is ${RandomNumber} and it took ${attemps} attempt/s to generate it.`)

// Task 8

const countries = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(countries);
countries.sort();
console.log(countries);


// Task 9
const cartoonDogs = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];
console.log(cartoonDogs);
console.log(cartoonDogs.includes("Pluto"));

// Task 10
const cartoonCats = ["Garfield", "Tom", "Sylvester", "Azrael"];
console.log(cartoonCats.sort());
console.log(cartoonCats.includes("Garfield") && cartoonCats.includes("Felix"));

// Task 11
const numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);
for (i = 0; i <= numbers.length -1; i++) {
    console.log(numbers[i]);
}
// Task 12

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objects);
let count = 0;
let count_1 = 0;
for (object of objects){
   if (object.toUpperCase().startsWith("B") || object.toUpperCase().startsWith("P"))  count++; 
   if (object.toLowerCase().includes("pen") ||object.toLowerCase().includes("book")) count_1++;
}
console.log(count)
console.log(count_1)

// Task 13
const numbers_1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers_1);
let Count = 0;
let Count1 = 0;
let Count2 = 0;
for(number of numbers_1){
    if (number > 10 ) Count++;
    if (number < 10 ) Count1++;
    if (number === 10 ) Count2++;
}
console.log(`Elements that are more than 10 = ${Count}`);
console.log(`Elements that are less than 10 = ${Count1}`);
console.log(`Elements that are 10 = ${Count2}`);

// Task 14
const First_array = [ 5, 8, 13, 1, 2 ];
const Second_array = [ 9, 3, 67, 1, 0 ];
console.log(First_array);
console.log(Second_array);
const New_array = [];
for(let i = 0; i < First_array.length; i++ ){
   if(First_array[i] > Second_array[i]) New_array.push(First_array[i]);
   else New_array.push(Second_array[i]);
}
console.log(New_array)

// Task 15

function firstDuplicate(arr){
    let firstDuplicate1 = null;
    for (i = 0; i < arr.length; i++){ 
        let first = arr[i]
        let last = arr.slice(i+1)
        if(last.includes(first)) {
            firstDuplicate1 = first
            break
        } 
    }
    if (firstDuplicate1 === null) return -1
    else return firstDuplicate1
}
console.log(firstDuplicate([ 3, 7, 0, 10,]))

// Task 16 
/*function getDublicates(arr){
    let duplicates = [];
    for (i = 0; i < arr.length; i++){
        first = arr[i];
        last = arr.slice(i+1);
        if (last.includes(first)) { 
            if (!duplicates.includes(first)) duplicates.push(first)
        }
    }
    return duplicates
}
console.log(getDublicates([ 0, -4, -7, 0, 5 , 10, 45, -7, 0 ]))
*/
function getDublicates(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j] && !newArr.includes(arr[i])) newArr.push(arr[i])
        }
    } 
return newArr
}
console.log(getDublicates([ 0, -4, -7, 0, 5 , 10, 45, -7, 0 ]))



// Task 17
function reverseStringWords(str){
const words = str.split(" ")
const reversedWords = [];
for (const word of words){
    const reversedWord = word.split("").reverse().join("")
    reversedWords.push(reversedWord)
}
   const reversedString = reversedWords.join(" ")
   return reversedString
}
console.log(reverseStringWords("Hello World"))

// Task 18 
let array = [];
function getEvens(x,y) {
    let first = Math.min(x,y);
    let last = Math.max(x,y);
    for (i = first; i <= last; i++ ){
        if (i % 2 === 0) array.push(i)
    }

return array;
}
console.log(getEvens(4,4));

// Task 19
let array19 = [];
function getMultipleOf5(x,y){
    let first = Math.min(x,y);
    let last = Math.max(x,y);
    for (i = first; i <= last; i++){
        if (i % 5 === 0) array19.push(i)
    }
if (x < y) return array19;
else return array19.reverse()
}
console.log(getMultipleOf5(2,8));

// Task 20
let array20 = [];
function fizzBuzz1(x, y){
let first = Math.min(x,y);
let last = Math.max(x,y);
for (i = first; i <= last; i++){
    if (i % 5 === 0 && i % 3 === 0) array20.push("FizzBuzz")
    else if (i % 3 === 0) array20.push("Fizz")
    else if (i % 5 === 0) array20.push("Bazz")
    else array20.push(i)
}
return array20.join(" | ")
}
console.log(fizzBuzz1(9,6));