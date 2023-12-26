// Task 1

const toInitials = str =>  `${str.split(" ")[0][0]}. ${(str.split(" ")[1][0]).toUpperCase()}.`

console.log(toInitials( "Joe Doe"))
console.log(toInitials("Alex Reyes"))
console.log(toInitials("Ja Le"))

// Task 2

const hasNumbers = str =>str.split("").some(x => x >= '0' && x <= '9')
console.log(hasNumbers(""))
console.log(hasNumbers("John is 34 years old"))
console.log(hasNumbers("Hello 3"))
console.log(hasNumbers("125$"))
console.log(hasNumbers("125$"))
console.log(hasNumbers("   a   "))
console.log(hasNumbers("  "))
console.log(hasNumbers("!@#$%^&*()_+") )


// Task 3

const elementLength = arr =>arr.map(x=> x.length)

console.log(elementLength( [ "Hello", "World" ]))
console.log(elementLength([ "Apple", "Banana", "Orange", "Pear" ] ))
console.log(elementLength( []))
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) )


// Task 4

const isArraySumEvenOrOdd = arr =>((arr.reduce((num, sum) => num + sum, 0))% 2 === 0) ? 'even' : 'odd'

console.log(isArraySumEvenOrOdd( [] ))
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ))
console.log(isArraySumEvenOrOdd( [7,1, 8,1] ))
console.log(isArraySumEvenOrOdd( [ 0,0] ))
console.log(isArraySumEvenOrOdd( [1,1,1,1,1] ))

// Task 5

const reverse = str =>str.split("").reverse().join("")

console.log(reverse("Hello World"))
console.log(reverse(""))

// Task 6

const reverseWords = str =>str.split(" ").map(word => word.split('').reverse().join("")).join(" ")

console.log(reverseWords("Hello World") )