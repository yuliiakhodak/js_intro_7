// Task 1

function countPos(arr){
return(arr.filter(num => num > 0)).length
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))

// Task 2
function countA(str){
    let count = 0;
    for(letter of str)
    if(letter.toLowerCase() === "a") count++
    return count;
}
console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))

//Task 2 - 2 way
function countA(str){
return (str.split("").filter(letter => letter.toUpperCase().includes("A"))).length
}
console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))


// Task 3
function countVowels(word){
   let count = 0;
   for (letter of word){
    if (letter.toLowerCase() === "a" ||
        letter.toLowerCase() === "e" ||
        letter.toLowerCase() === "o" ||
        letter.toLowerCase() === "u" ||
        letter.toLowerCase() === "i" ) count++
   }
   return count
}
console.log(countVowels("JavaScript is fun"))

// Task3 - 2 way 
function countVowels(str){
    return (str.split("").filter(letter => ("aeouiAEOUI".includes(letter)))).length 
 }
 console.log(countVowels("JavaScript is fun"))

// Task 4 
function countConsonants(word){
    let count = 0;
    for (letter of word){
     if (letter.toLowerCase() !== "a" &&
         letter.toLowerCase() !== "e" &&
         letter.toLowerCase() !== "o" &&
         letter.toLowerCase() !== "u" &&
         letter.toLowerCase() !== "i" ) 
         count++;
    }
    return count;
 }
 console.log(countConsonants("JavaScript is fun"))

 // Task 4 - 2 way
 function countConsonants(str){
    return (str.split("").filter(letter => !("aeouiAEOUI ".includes(letter)))).length
 }
 console.log(countConsonants("JavaScript is fun"))


 //Task-5

 function countWords(str){
     return (str.trim().split(" ")).length
 }
 console.log(countWords("Cypress is an UI automation tool.    ") )	

 // Task 6 

 function factorial (num){
    let factorial = 1;
    for (let i = num; i > 0; i--){
       factorial *= i
    }
    return factorial
 }
  console.log(factorial(5))

   // Task 7 
  function isPalindrome(word){
   word_array = word.toLowerCase().split("")
   if (word_array.length % 2 === 0){
    fisrtHalf = (word_array.slice(0, word_array.length / 2)).toString()
    lastHalf = ((word_array.slice(word_array.length / 2  )).reverse()).toString()
    console.log(fisrtHalf, lastHalf)
      return fisrtHalf === lastHalf
   }
   }

   console.log(isPalindrome("abba"))

function isPalindrome(word){
    word = word.toLowerCase()
    console.log(word)
    for(i = 0; i < word.length/2; i++){
       if (word[i] !==  word[word.length - 1 - i]) return false
      
    
    } return true
}
    console.log(isPalindrome("abba"))
   // Task 8 

   function countMultipleWords(arr) {
      let count = 0;
      for (word of arr){
     let newW = word.toString().trim()
     if (newW.includes(" ")) count ++
   } return count
   }
   console.log(countMultipleWords(([ "f o o", "b a r", "foo bar", "     foo bar   " ]) ))

   // Task 9
   function count3OrLess(str){
      return str.split(" ").filter(x => x.length<=3).length

   }
   console.log(count3OrLess("My name is John Doe") )

   // Task 10
   function isPrime(num) {
   for (i = 2; i < 9; i++){
       if (num % (i+1)=== 0) return false
       else return true
   }
   }
   console.log(isPrime(5))

   // Task 11
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
   console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) )

   // Task 12
   function removeExtraSpaces(arr){
   return arr.split(" ").filter(x => (x.length > 1)).join(' ')
}
console.log(removeExtraSpaces("Hello   World"))
//Task 13
function findClosestTo10(arr){
newARR = arr.filter(x=> x < 10).sort((n1, n2) => n1 - n2)
return newARR[newARR.length-1]
}
console.log(findClosestTo10([0, -1, -2])) 

// Task 14

function isEmailValid(str){
const indexOfa = (str.indexOf("@"))
const indexOfDOT = str.indexOf(".")
if(str.includes(" ") || str.includes("@@") ||  
(str.slice(0,indexOfa).length < 2) ||
(str.slice(indexOfDOT + 1).length < 2) ||
(str.slice(indexOfa + 1, indexOfDOT).length < 2)) return false
else return true
}
console.log(isEmailValid("e@gmail.com"))

// Task 15  - ????????????
function isPasswordValid(str){
if (str.length < 8 || str.length > 16 || str.includes(" ")) return false
arr = str.split('')
 arr.some(x => {
   if(x.toString.charCodeAt(x) > 90) return true
   else return false
})
}

console.log(isPasswordValid("Chicago1234"))