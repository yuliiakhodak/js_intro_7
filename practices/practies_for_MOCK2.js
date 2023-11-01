
// TASK 1
// Double or Triple the Word

const doubleOrTripleWord = str => (str.length % 2 === 0) ? str + str + str : str + str

console.log(doubleOrTripleWord("Techo"))

// TASK 2  functionfirstlastWord()

const firstLastWord = str => {
    const arr = str.split(" ")
    return arr[0] + arr[arr.length - 1]
}
console.log(firstLastWord(""))

// TASK 3 HAS VOWEL

const hasVowel = str => {
    const arr = str.split("")
    if (arr.some(e => "aAeEoOuUIi".includes(e))) return true
    else return false
}

console.log(hasVowel("Java"))

// Task 4 ---- Start Vowel

const startVowel = str => "aeiouAEIOU".includes(str[0]) ? true : false
console.log(startVowel("Hello"))

// Task 5 ---Average of Edges

const averageOfEdges = (n1, n2, n3) => (Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2
console.log(averageOfEdges(-2, -2, 10))

// Task 6 Swap First and Last Characters

const replaceFirstLast = str => {
    str = str.trim()
    if (str.length < 2) return ""
    else return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1)
}
console.log(replaceFirstLast('Tech Global'))

/// Task 7 swap 4
const swap4 = str => {
    str = str.trim()
    if (str.length < 8) return ""
    else return str.slice(str.length - 4) + str.slice(4, str.length - 4) + str.slice(0, 4)
}
console.log(swap4("JavaScript"))

// Task 8 Swap First and Last Words
/*
const swapFirstLastWord = str =>{
    str = str.trim()
    if (str.includes(" ")){
     let firstWord = str.slice(0, str.indexOf(" "))
     let lastWord = str.slice(str.lastIndexOf(" ") + 1)
     let middle = str.slice(str.indexOf(" "),str.lastIndexOf(" ") + 1 )
     return lastWord + middle + firstWord
    }
    else return " "
}
*/
const swapFirstLastWord = str => {
    arr = str.trim().split(" ")
    if (arr.length >= 2) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
        return arr.join(" ")
    }
    else return " "
}


console.log(swapFirstLastWord("Hello MYH World"))

// Task 9

const countPos = arr => (arr.filter(x => (x > 0))).length
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))

//Task 10

const getEvens = (n1, n2) => {
    let newArr = [];
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        if (i % 2 === 0) newArr.push(i)
    }
    return newArr;
}

console.log(getEvens(3, 3))

//Task 11

const getMultipleOf5 = (n1, n2) => {
    newArr = [];
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        if (i % 5 === 0) newArr.push(i)
    }
    return newArr;
}
console.log(getMultipleOf5(23, 5))

// Task 12 
const countNeg = arr => (arr.filter(x => (x < 0)).length)

console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))


//Task 13 count A 

const countA = str => (str.toLowerCase().split("").filter(x => x === "a")).length

console.log(countA("TechGlobal is a QA bootcamp"))

// Task 14 count words

const countWords = str => (str.trim().split(" ")).length

console.log(countWords("TechGlobal is a QA bootcamp"))

// Task 15
const factorial = num => (num === 0 || num === 1) ? 1 : num * factorial(num - 1)

console.log(factorial(5))

// Task 16 Count 3 or less
const count3OrLess = str => (str.split(" ").filter(word => word.length <= 3 && word.length > 0)).length

console.log(count3OrLess(""))

// Task 17

const removeExtraSpaces = str => str.split(" ").filter(x => x.length > 0).join(" ")
console.log(removeExtraSpaces("     Hello   World"))

// Task 18

const middleInt = (x, y, z) => {
    arr = [x, y, z]
    return arr.sort((n1, n2) => (n1 - n2))[1]
}

console.log(middleInt(5, 5, 8))

// Task 19 

const FirstDublicate = arr => {
    let fDublicate = -1;
    for (let i = 0; i < arr.length; i++) {
        if ((arr.slice(i + 1)).includes(arr[i])) fDublicate = arr[i];
        break;
    }
    return fDublicate;
}

console.log(FirstDublicate(["foo", 123, 'abc', "foo", "bar"]));

// Task 20

const getDublicates = arr => {
    arrWithDublicates = [];
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).includes(arr[i]) && !arrWithDublicates.includes(arr[i])) arrWithDublicates.push(arr[i]);
    }
    return arrWithDublicates;
}

console.log(getDublicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

// Task 21

const countVowes = str => {
    return (str.split("").filter(x => "AEOUIaeoui".includes(x))).length
}

console.log(countVowes("Hello"))

// Task 22

const reverseStringWords = str => str.trim().split(" ").map((word => word.split("").reverse().join(""))).join(" ")

console.log(reverseStringWords("Hello World"))




// Task 23

const countConsonants = str => (str.split("").filter(x => !('AaEeIiOoUu'.includes(x)))).length

console.log(countConsonants("Hello"))

// Task 24

const countMultipleWords = arr => (arr.filter(e => (e.trim().includes(" ")))).length

console.log(countMultipleWords(["foo", "", " ", "foo bar", " foo"]))

// Task 25

const fizzBuzz = (n1, n2) => {
    arr = [];
    for (i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        if (i % 15 === 0) arr.push("FizzBuzz")
        else if (i % 3 === 0) arr.push("Fizz")
        else if (i % 5 === 0) arr.push("Buzz")
        else arr.push(i)
    }
    return arr.join(" | ")
}

console.log(fizzBuzz(5, 5))

// Task 26

const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
console.log(isPalindrome("Civic"))

// Task 27

const isPrime = num => {
    if (num < 2) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i < Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(29))

// Task 28
/*
const add = (arr1, arr2) =>{
    const newArr = [];
 maxArr = Math.max(arr1.length, arr2.length)
 for(i = 0; i < maxArr; i++){
    if(arr1[i] === undefined) arr1[i] = 0
    else if (arr2[i] === undefined) arr2[i] = 0
    else newArr.push(arr1[i] + arr2[i])
 }
 return newArr
}
/*
function add(arr1, arr2){
    const newArr = []
    maxArray = Math.max(arr1.length, arr2.length)
    for (i = 0; i < maxArray; i++){
       if (arr1[i] === undefined) arr1[i] = 0
       if (arr2[i] === undefined) arr2[i] = 0
       else newArr.push(arr1[i] + arr2[i])
    }
   return newArr
 }
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
 */


const add = (arr1, arr2) => {
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((value, i) => value + (arr2[i] || 0))
}

/*
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    for(let i = 0; i < arr2.length; i++){
        arr1[i] += arr2[i];
    }

    return arr1
*/

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));  // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));  // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));  // [0, 0, 0, 0]


const add2 = (arr1, arr2) => {
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((value, i) => (value + (arr2[i] || 0)))
}
console.log(add2([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add2([-5, 6, -3, 11], [5, -6, 3, -11]));  // [0, 0, 0, 0]

// Task 29

const noA = arr => arr.map(word => (word.includes("A")) ? "###" : word)
console.log(noA((["javascript", "helAlo", "123", "xyz"])))

// Task 30

const no3and5 = arr => {
    return arr.map(num => {
        if (num % 15 === 0) return 101
        if (num % 5 === 0) return 99
        if (num % 3 === 0) return 100
        else return num
    })
}
console.log(no3and5([10, 11, 12, 13, 14, 15]))

//Task 31
const no13 = arr => arr.map(num => (num === 13) ? 0 : num)
console.log(no13(([13, 2, 3])))

// Task 32

const removeDublicates = arr => {
    const Dublicates = [];
    const NoDublicates = [];
    for (num of arr) {
        if (NoDublicates.includes(num) && !(Dublicates.includes(num))) Dublicates.push(num)
        else NoDublicates.push(num)
    }
    return NoDublicates
}
console.log(removeDublicates([10, 20, 35, 20, 35, 60, 70, 60]))


// Task 33

const noDigit = str => (str.split("").filter(char => !(char >= "1" && char <= "9"))).join("")

console.log(noDigit("123Tech456Global149"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Hello"))
console.log(noDigit("Javasrcipt"))
console.log(noDigit(""))

// Task 34

const noVowel = str => (str.split('').filter(x => !("AaIiOoUuEe".includes(x)))).join("")

console.log(noVowel("TechG lobal"))
console.log(noVowel("AEOxyz"))

// Task 35

const sumOfDigits = str => {
    let numbers = str.split("").filter(x => (x >= 1 && x <= 9))
    let sum = 0
    for (num of numbers) {
        sum += parseInt(num)
    }
    return sum
}

console.log(sumOfDigits("John's age is 29"))


const isPrime2 = num => {
    if (num < 2) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0) return false
    for (let i = 5; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime2(6))

const add3 = (arr1, arr2) => {
    let biggerArr;
    let smallerArr = []
    if (arr2.length > arr1.length) biggerArr = arr2, smallerArr = arr1
    else biggerArr = arr1, smallerArr = arr2
    let addedArr = [];
    for (i = 0; i < biggerArr.length; i++) {
        if (smallerArr[i] === undefined) addedArr.push(biggerArr[i])
        else addedArr.push(biggerArr[i] + smallerArr[i])
    }
    return addedArr
}

console.log(add3([3, 0, 0], [6, 3, 2, 5]))


const arrFactorial = arr => {
    const factorial = num => {
        if (num === 0 || num === 1) return 1
        else return num * factorial(num - 1)
    }
    return arr.map(num => factorial(num))
}

console.log(arrFactorial([1, 2, 3, 4]))

const sumOfDigits3 = str => {
    let numbers = str.split("").filter(x => (x >= 0 && x <= 9))
    result = numbers.reduce((acc, curr) => acc += Number(curr), 0)
    return result
}

console.log(sumOfDigits3("John's age is 29"))

const palindrome = str => str.toLowerCase() === str.toLowerCase().split("").reverse().join("")

console.log(palindrome(""))


console.log("abc " ?? "2")


const hasVowel2 = str => {
    if (str.split("").some(x => "AaIiEeOoUu".includes(x))) return true
    else return false
}

console.log(hasVowel2("Hll"))

function getMultipleOf5(num1, num2) {
    let multiplesOf5 = [];

    for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
        if (i % 5 === 0) {
            multiplesOf5.push(i);
        }
    }

    return multiplesOf5;
}

// Examples
console.log(getMultipleOf5(3, 17)); // Output: [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)); // Output: [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5));  // Output: [ 5 ]
console.log(getMultipleOf5(2, 4));  // Output: []



// sum of Digits

const sumOfDigits2 = str => {
    return ((str.split("").filter(x => (x >= 1 && x <= 9)))).reduce((sum,val)=> sum += Number(val),0)
}

console.log(sumOfDigits2("John's age is 29"))

// remove dublicates

const removeDuplicates222 = arr =>{
     arrNoDublicates = [];
     arrAllDublicates = [];
  for (i = 0; i < arr.length; i++){
    if (arr.slice(i+1).includes(arr[i])) arrAllDublicates.push(arr[i])
    else arrNoDublicates.push(arr[i])
  }
return arrNoDublicates

}

console.log(removeDuplicates222([10, 20, 35, 20, 35, 60, 70, 60]))   // [10, 20, 35, 60, 70] 


const middleNumber2 = arr=>{
return (arr.sort((n1,n2) => n1-n2))[1]
}
console.log(middleNumber2([1, 2, 2]))
()
const noVowel2 = str  =>(str.split("").filter(x => (!("AaIiOoEeUu".includes(x))))).join("")

console.log(noVowel2("TechGlobal"))

const middleInt4 = (n1, n2, n3) =>{
    arr = [ n1, n2, n3]
    return (arr.sort((a, b) => (a - b)))[1]
}

console.log(middleInt4(1, 3, 1))

const firstLastWord3 = str =>{
    arr = str.split(" ")
    return arr[0] +arr[arr.length - 1]
    }

    console.log(firstLastWord3("I like JavaScript"))

    const no3no5 = arr =>{
      return arr.map(num =>{
        if(num % 15 === 0) return num = 101
        if(num % 5 === 0) return num = 99
        if(num % 3 === 0) return num = 100
        else return num
        })
        
        }
console.log(no3no5([3, 4, 5, 6]))        

const countWords = str =>(str.trim().split(" "))

console.log(countWords("   I like Java    Script    "))


const count = arr =>{
    let count = 0;
    arr.forEach(x =>{
     if (x.trim().includes(" ")) return count ++
    })
    return count
    }

    console.log(count(["g gg", "g g g", "   123"]))