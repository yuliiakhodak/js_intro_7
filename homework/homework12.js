// Task 1

const makeNegative = num => num <= 0 ? num : Math.abs(num) * -1

console.log(makeNegative(10))
console.log(makeNegative(-7))
console.log(makeNegative(0))
console.log(makeNegative(0.45))

// Task 2

const isSumEvenOrOdd = (num1, num2, num3) => (num1 + num2 + num3) % 2 === 0 ? "even" : "odd"

console.log(isSumEvenOrOdd(0, 1, 4))
console.log(isSumEvenOrOdd(0, -1, -5))
console.log(isSumEvenOrOdd(0, 0, 0))
console.log(isSumEvenOrOdd(7, 1, 9))
console.log(isSumEvenOrOdd(1, 1, 1))

// Task 3

const decimal2 = arr => arr.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84]))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))


// Task 4

const myPow = (x, n) => x ** n

console.log(myPow(3, 3))
console.log(myPow(10, 1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))

// Task 5

const findLongestWord = str => {
  let arr = str.split(" ")
  let longestWord = arr[0];
  arr.forEach(word => {
    if (word.length > longestWord.length) longestWord = word
  });
  return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("This is a sample string for testing"))
console.log(findLongestWord("One two ten"))
console.log(findLongestWord(""))
console.log(findLongestWord("  "))