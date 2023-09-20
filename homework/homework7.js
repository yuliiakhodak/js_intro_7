/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/
/* 1 way
const hasUpperCase = (str) => {
    if(str.length > 1) {
 for (letter of str){
    if(letter >= "A" && letter <= "Z" ) return true
    else return false
 }}
 else return false
}
*/
// 2 way

const hasUpperCase = str => ((str.length > 1) ? (str.split("")).some(x => (x >= "A" && x <= "Z")) : false)

console.log(hasUpperCase("javascript"))
console.log(hasUpperCase("John"))
console.log(hasUpperCase("$125.0"))
console.log(hasUpperCase(""))

/*

Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/
const noDigit = str => ((str.split("")).filter(x => !(x >= "1" && x <= "9"))).join("")
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello World149"))

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$
*/

const noVowel = str => (str.split("")).filter(x => !("AaEeOoIiUu".includes(x))).join("")

console.log(noVowel("AEOxyz"))
console.log(noVowel("TechGlobal"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("125$"))
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

const no13 = arr => {
   newArr = []
   arr.forEach(element => (element === 13) ? newArr.push(0) : newArr.push(element));
   return newArr;
}
console.log(no13([13, 2, 3]))

// 2 way 
const no13 = arr => {
   const newArr = arr.map(x => (x === 13) ? 0 : x)
   return newArr
}
console.log(no13([13, 2, 3]))

// Task 5
/*
Write a function named middleInt() which takes three number arguments and return the middle number. ​
examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/


const middleInt = (a1, a2, a3) => {
   let arr = [a1, a2, a3]
   return (arr.sort((n1, n2) => n1 - n2))[1]

}
console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))

// Task 6 
/*
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

*/
// 1 way

const sumOfDigits = str => {
   newArr = str.split("").filter(x => (x >= 1 && x <= 9))
   sum = 0;
   for (i = 0; i < newArr.length; i++) {
      sum += parseInt(newArr[i])
   }
   return sum
}
console.log(sumOfDigits("John's age is 29"))

// 2  way

const sumOfDigits2 = str => {
   newArr = str.split("").filter(x => (x >= 1 && x <= 9))
   sumOfD = newArr.reduce((sum, val) => parseInt(sum) + parseInt(val))
   return sumOfD
}
console.log(sumOfDigits2("John's age is 29"))

// Task 7
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/


const arrFactorial = arr =>{
const factorial = n => n <= 1 ? 1: n * factorial(n-1)
return arr.map(num => factorial(num))
}
console.log(arrFactorial([1,2,3,4]))

/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array 
as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/

const categorizeCharacters = str =>{
   const newArr = str.toLowerCase().split("")
   const letters = (newArr.filter(x => (x >= "a" && x <= "z"))).join("")
   const numbers = (newArr.filter(x => (x >= "1" && x <= "9"))).join("")
   const specials = (newArr.filter(x => !(x >= "1" && x <= "9") && !((x >= "a" && x <= "z")))).join("")
   result = [letters, numbers, specials]
   return result
}
console.log(categorizeCharacters("abc123$#%"))

