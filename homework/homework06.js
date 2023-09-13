
// Task 1

const noSpace = str => str.split(" ").join("")

console.log(noSpace("Tech Global"))

//Task2 
const replaceFirstLast = str => {
    if (str.trim().length < 2) return " "
    else return str.slice(str.length - 1) + str.slice(1,str.length - 1) + str.slice(0,1)
}
console.log(replaceFirstLast("    h   "))

//Task3

const hasVowel = str => str.split("").some(letter => "aeoui".includes(letter));
console.log(hasVowel("Javascript"))	


//Task 4
const checkAge = num => {
yearNow = new Date().getFullYear();
console.log(yearNow)
if ((yearNow - num) >= 16 && (yearnow - num) > 120) return "AGE IS  NOT VALID"
if ((yearNow - num) < 16) return "AGE IS NOT ALLOWED"
if ((yearNow - num) >= 16) return "AGE IS  ALLOWED"
}
console.log(checkAge(1820))

// Task 6

function noA(arr){
 newArr = arr.map(word => { if (word.toUpperCase().startsWith("A")) return "###" 
      else return word}) 
 return newArr
}
console.log(noA(["Aavascript", "hello", "123", "xyz"]))

// Task 7
function no3and5(arr) {
 newArr = arr.map(num =>{
 if(num % 3 === 0 && num % 3 === 0) return 101
 if(num % 3 === 0 ) return 100
 if(num % 5 === 0 ) return 99
 else return num
 })
 return newArr
}
console.log(no3and5([3, 4, 5, 6]))

// Task8

function isPrime(num){
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    let d = 5;
    while (num > d){
        if (num % d === 0) return false
        d+=2;
    }
        return true
    }
console.log(isPrime(4))

function countPrimes(arr){
    return (arr.filter(num=>isPrime(num))).length
}

console.log(countPrimes([7, 8, 11, 23, 17])) 
// Task 9

function  removeDuplicates(arr) {
let arrNoDuplicates = [];
let allDublicates = [];
for (obj of arr){
    if(arrNoDuplicates.includes(obj) && !(allDublicates.includes(obj))) allDublicates.push(obj)
    else arrNoDuplicates.push(obj)
}
return arrNoDuplicates
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))

//Task 10 
function isDateFormatValid(str) {
    if (!(str.includes("/")))  return false
    else str = str.trim().split("/")
    if(!(str[0].length === 2 && str[1].length === 2 && str[2].length === 4 )) return false
    if(!(str[0] < 12 && str[1] < 32)) return false
    else return true
}

console.log(isDateFormatValid("10/30/2020")) // true
console.log(isDateFormatValid("")) 			
console.log(isDateFormatValid("15/30/2020")) 		
console.log(isDateFormatValid("10-30-2020 ")) 		
console.log(isDateFormatValid("5/30/2020")) 		
console.log(isDateFormatValid("05/30/2020 ")) // true		
console.log(isDateFormatValid("10/2/2020")) 		
console.log(isDateFormatValid("10/0222/20 ")) 	

/* task 11
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 5
secondMax([10]) 		-> 10

*/

function secondMax(arr){
let MaxNum = Math.max(...arr)
let Snumber = 0;
for (x of arr){
    if (x > Snumber &&  x !== MaxNum)  Snumber = x
}
return Snumber
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
//Task 12


function secondMin(arr){
    let MinNum = Math.min(...arr)
    let MaxNum = Math.max(...arr)
    let secondMIn = MaxNum;
    for(num of arr){
        if(num < secondMIn && num != MinNum) secondMIn = num
    }
    return secondMIn
}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23, 5, 11, 7,22, 1]))
console.log(secondMin([3, 4, 5, 6]))
/*
Write a method named mostRepeated() takes an array argument and returns the most counted 
element from the array.
NOTE: Assume that you will not be given empty array and the count of one element will 
always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"

*/

function mostRepeated(arr) {
    let mostRepeatedElement = arr[0]; 
    let maxCount = 1; 
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentCount = 1; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === currentElement) {
                currentCount++;
            }
        }
        if (currentCount > maxCount) {
            mostRepeatedElement = currentElement;
            maxCount = currentCount;
        }
    }

    return mostRepeatedElement;
}

// Test cases
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // Output: 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // Output: "pen"
console.log(mostRepeated([10])); // Output: 10
console.log(mostRepeated(["TechGlobal"])); // Output: "TechGlobal"